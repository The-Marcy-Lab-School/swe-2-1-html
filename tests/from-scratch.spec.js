/** @jest-environment jsdom */
const fs = require('fs');
const path = require('path');
const ScoreCounter = require('score-tests');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const indexHtmlText = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

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

  it('has a title tag in the head, with the right title', () => {
    const head = document.querySelector('head');
    const title = head.querySelector('title').textContent;
    expect(title).toBe('Intro to HTML');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a main tag in the body', () => {
    const body = document.querySelector('body');
    const main = body.querySelector('main');
    expect(main).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a h1 tag as the first child of main', () => {
    const h1 = document.querySelector('main h1:first-child');
    expect(h1).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has an h1 that has the right text content', () => {
    const h1 = document.querySelector('main h1:first-child');
    expect(h1.textContent).toBe('Hello world!');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a p tag as the second child of main', () => {
    const p = document.querySelector('main p:nth-child(2)');
    expect(p).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a p tag in main with an id and right text content', () => {
    const p = document.querySelector('main p#subtitle');
    expect(p.textContent).toBe("It's great to see you!");

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has an h2 tag in main', () => {
    const h2 = document.querySelector('main h2');
    expect(h2).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has an h2 tag with the right text content', () => {
    const h2 = document.querySelector('main h2');
    expect(h2.textContent).toBe('Hobbies');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has an ordered list of hobbies in main', () => {
    const ol = document.querySelector('main ol#hobbies');
    expect(ol).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has 4 list items in the hobbies list in the right order', () => {
    const ol = document.querySelector('main ol#hobbies');
    const lis = ol.querySelectorAll('li');
    expect(lis.length).toBe(4);

    const firstHobby = ol.querySelector('li:nth-child(1)');
    expect(firstHobby.textContent).toBe('Chess');

    const secondHobby = ol.querySelector('li:nth-child(2)');
    expect(secondHobby.textContent).toBe('Coding');

    const thirdHobby = ol.querySelector('li:nth-child(3)');
    expect(thirdHobby.textContent).toBe('Cooking');

    const fourthHobby = ol.querySelector('li:nth-child(4)');
    expect(fourthHobby.textContent).toBe('Running');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a class of nerd on only 2 of the hobbies', () => {
    const ol = document.querySelector('main ol#hobbies');
    const lis = ol.querySelectorAll('li.nerd');
    expect(lis.length).toBe(2);

    expect([...lis].find((li) => li.textContent === 'Chess')).toBeTruthy();
    expect([...lis].find((li) => li.textContent === 'Coding')).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a div in main that has the right id', () => {
    const div = document.querySelector('main div#status-code-info');
    expect(div).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a status code img in the status code div with the right src and alt', () => {
    const img = document.querySelector('main div#status-code-info img');
    expect(img).toBeTruthy();
    expect(img.src).toBe('https://http.cat/images/200.jpg');
    expect(img.alt).toBe('A weird looking cat that exudes good vibes.');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a status code div with 2 p tags with the right text content', () => {
    const div = document.querySelector('main div#status-code-info');

    const firstP = div.querySelector('p:nth-of-type(1)');
    expect(firstP.textContent).toBe('Status: 200');

    const secondP = div.querySelector('p:nth-of-type(2)');
    expect(secondP.textContent).toBe("Description: It's all good!");

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has 2 span tags in the status code div with the right class and text content', () => {
    const div = document.querySelector('main div#status-code-info');

    const spans = div.querySelectorAll('span.fancy');
    expect(spans.length).toBe(2);

    expect([...spans].find((span) => span.textContent === 'Status:')).toBeTruthy();
    expect([...spans].find((span) => span.textContent === 'Description:')).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a link to the modify page in the main tag', () => {
    const link = document.querySelector('main a[href="./modify.html"]');
    expect(link).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('has a link to the modify page in the main tag with the right text content', () => {
    const link = document.querySelector('main a[href="./modify.html"]');
    expect(link.textContent).toBe('Go to our modify page!');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('opens the modify page in a new tab', () => {
    const link = document.querySelector('main a[href="./modify.html"]');
    expect(link.target).toBe('_blank');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });
  afterAll(scoreCounter.export);
});
