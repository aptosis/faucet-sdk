#!/usr/bin/env -S bash -xe

rm -fr packages/faucet/src
move-tsgen ../faucet --out-dir packages/faucet/src
