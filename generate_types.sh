#!/usr/bin/env -S bash -xe

rm -fr packages/*/src
move-tsgen ../faucet --out-dir packages/faucet/src
move-tsgen ../mint-wrapper --out-dir packages/mint-wrapper/src
