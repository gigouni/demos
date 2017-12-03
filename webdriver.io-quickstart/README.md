# Webdriver.io quickstart

Just a way to assume how Webdriver.io works. It's the result of the tutorial [here](http://webdriver.io/guide.html).
The difference is by using Chrome driver instead of Gecko driver (Mozilla Firefox).

## Getting started

Clone the stack

```shell
$ git clone https://github.com/gigouni/webdriver.io-quickstart
```

[Download the latest version of the Chrome driver JAR](https://chromedriver.storage.googleapis.com/2.30/chromedriver_linux64.zip) _(here for Linux, 64 bits)_.
Extract the driver into the stack folder. 

Then, run the test

```shell
$ npm i
$ node test.js
```

It should display: __"Title was: Google"__