"""Generate the PA interview reel with Seedance 2.0 (Higgsfield API).

Usage:
    export HF_KEY="KEY_ID:KEY_SECRET"
    python3 generate.py            # 1080p, 15s, 9:16, with audio
    python3 generate.py --resolution 720p   # cheaper draft

Uses only the standard library. Saves the result as reel-<request_id>.mp4.
"""
import argparse
import json
import os
import pathlib
import sys
import time
import urllib.request

ENDPOINT = "https://api.higgsfield.ai/bytedance/seedance-2.0/text-to-video"
HERE = pathlib.Path(__file__).parent


def call(url, body=None):
    req = urllib.request.Request(
        url,
        data=json.dumps(body).encode() if body is not None else None,
        method="POST" if body is not None else "GET",
        headers={
            "Authorization": f"Key {os.environ['HF_KEY']}",
            "Content-Type": "application/json",
        },
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        return json.load(resp)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--resolution", default="1080p", choices=["480p", "720p", "1080p", "4k"])
    parser.add_argument("--duration", type=int, default=15)
    args = parser.parse_args()

    if "HF_KEY" not in os.environ:
        sys.exit("Set HF_KEY=KEY_ID:KEY_SECRET first.")

    status = call(ENDPOINT, {
        "prompt": (HERE / "prompt.txt").read_text().strip(),
        "duration": args.duration,
        "resolution": args.resolution,
        "aspect_ratio": "9:16",
        "generate_audio": True,
    })
    request_id = status["request_id"]
    print(f"Submitted {request_id}")

    while status["status"] in ("queued", "in_progress"):
        time.sleep(10)
        status = call(status["status_url"])
        print(f"  {status['status']}")

    if status["status"] != "completed":
        sys.exit(f"Request ended as {status['status']}: {status.get('error', '')}")

    out = HERE / f"reel-{request_id}.mp4"
    urllib.request.urlretrieve(status["video"]["url"], out)
    print(f"Saved {out}")


if __name__ == "__main__":
    main()
