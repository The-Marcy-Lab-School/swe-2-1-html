/** @jest-environment jsdom */
const fs = require('fs');
const path = require('path');
const ScoreCounter = require('score-tests');

const testSuiteName = 'Modify Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const indexHtmlText = fs.readFileSync(path.resolve(__dirname, '../src/modify.html'), 'utf8');

describe(testSuiteName, () => {

  /* DO NOT MODIFY THIS BLOCK
  
  This is a cool bit of testing logic. Because Node (and therefore Jest) is not
  a browser, it doesn't have a "document" to render your HTML. So, the code below
  makes use of the DOM API (which you'll learn about soon) to insert your HTML
  code into an object before each test and then we can "query" the document to 
  see how you structured your HTML.
  */
  beforeEach(() => {
    document.documentElement.innerHTML = indexHtmlText;

    scoreCounter.add(expect); // DO NOT TOUCH
  });

  it('has a header tag and not a div with an id of header', () => {
    const header = document.querySelector('header');
    expect(header).toBeTruthy();

    const div = document.querySelector('div#header');
    expect(div).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a nav tag and not a div with an id of nav', () => {
    const nav = document.querySelector('nav');
    expect(nav).toBeTruthy();

    const div = document.querySelector('div#nav');
    expect(div).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a main tag and not a div with an id of main', () => {
    const main = document.querySelector('main');
    expect(main).toBeTruthy();

    const div = document.querySelector('div#main');
    expect(div).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a footer tag and not a div with an id of footer', () => {
    const footer = document.querySelector('footer');
    expect(footer).toBeTruthy();

    const div = document.querySelector('div#footer');
    expect(div).toBeFalsy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has only one h1 tag and then h2 tag', () => {
    const h1 = document.querySelectorAll('h1');
    expect(h1.length).toBe(1);

    const h2 = document.querySelector('#second-heading');
    expect(h2).toBeTruthy();
    expect(h2.textContent).toBe('What should I be?');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a pre tag with a code tag child', () => {
    const pre = document.querySelector('pre');
    expect(pre).toBeTruthy();

    const code = pre.querySelector('code');
    expect(code).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  afterAll(scoreCounter.export);
});
