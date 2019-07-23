# NEOCORE-SELENIUM-DRIVERS

## Problem

China Dev/QAs are hard to download selenium related drivers when run npm install at neocore-dc2-automation locally.

## Solution

1. Create a jenkins job to download drivers to VM, and upload those drivers to VM(repo.servicemax.io?).
2. Dev/QAs locally update selenium-config.js, change the baseURL to the VM url.

## Drivers
1. Firefox - https://github.com/mozilla/geckodriver/releases
2. Chrome - https://chromedriver.storage.googleapis.com/
