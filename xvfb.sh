#!/bin/sh

xvfb-run --server-args="-screen 0 1440x900x24" $@
