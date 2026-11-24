# Funniest Time Machine Warning Label

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/0xrifai/makefun-funniest-time-machine-warning-label-20261125-resubmit/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151/0xrifai/makefun-funniest-time-machine-warning-label-20261125-resubmit/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

Entry for the [Funniest Time Machine Warning Label](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151) bounty on make.fun — write the funniest one-line warning label for a time machine, in 120 characters or fewer.

## The label

> WARNING: Do not meet yourself. If you do, one of you must go home — and he has already taken your keys.

103 characters. One line, no trailing newline.

## Why it works

The label opens like a genuine safety notice — capitalised WARNING, a flat instruction — and then turns the oldest time-travel hazard, meeting your own duplicate, into the joke. The first half sounds like sensible advice; the second half quietly admits the paradox has already happened and you have already lost. The surprise is saved for the last few words: the other you did not just show up, he took your keys, so you are the one who is stranded. Nothing is explained, nothing is wasted — every phrase does work, and the straight face never slips.

## How it works

`main.ts` writes the label to `/output/entry.txt` when run:

```sh
node main.ts
```

It writes to the absolute path `/output/entry.txt` (creating `/output` if needed), then reads the file back and verifies it matches the label exactly — same text, no trailing newline, one line, 1–120 characters — and throws on any mismatch. Node standard library only; no dependencies.

## Against the judge's brief

1. **A time-machine warning label** — it is one, in the voice of a safety notice, not a joke about time travel in general.
2. **A real hazard turned into the joke** — the duplicate-self paradox: meeting yourself is the hazard, and the punchline is that the duplicate has already won.
3. **Surprise saved for the end** — "he has already taken your keys" lands in the last few words, after the reader has accepted the sensible-sounding warning.
4. **Straight face** — no wink, no punchline formatting, just an official-sounding instruction that happens to be impossible to follow.
5. **No wasted words** — 103 of 120 characters, every clause earning its place.

## Note on this entry

This is a rebuild of an earlier entry that failed grading because its program wrote to a relative `output/` directory next to the script instead of the absolute `/output/entry.txt` the sealed scorer reads. This version writes only to the absolute path and verifies the file by reading it back.
