import "./style.css";
import React from "react";
import MessageBox from "../../components/MessageBox";

function Homepage() {
  return (
    <>
      <MessageBox />

      <div className="homepage">
        <div className="homepage-content">
          <h2>So what is this project called The Code Library all about?</h2>
          <p>
            As a programmer, I love it when things work efficiently. One thing
            where efficiency is a big deal, is deciding which code you memorize
            and which you don't. It's just too difficult and inefficient to
            memorize all code. Instead, we constantly look on the internet or
            local projects for code snippets that we don't know by heart.
          </p>
          <p>
            Due to how smart google is, we often find the right code snippet on
            the first try. But there's also many times where that's not the
            case. Sometimes it can even take 30+ minutes to find a code snippet
            that seems reasonably simple.
          </p>
          <p>
            To solve this issue, I created The Code Library.<br/>
            <strong>
              Here users can create and manage their own collection of code
              examples. Just imagine, what if 80-100% of all the code that you
              use on a regular basis would be stored in 1 place, wouldn't that
              be great!?
            </strong>
          </p>
          <p>
            There's also a general code library accessable to anyone. For now,
            it contains some simple examples to demonstrate how this site works.
            Perhaps in a future version, users can suggest code snippets from
            their own collection to the general code library. Then this website
            could become an open source tutorial platform. Like a mix between
            w3schools and stackoverflow.
          </p>
          <br/>
          <h2>How do I make my own code library?</h2>
          <p>1) Sign up</p>
          <p>2) Open the sidebar</p>
          <p>3) Change 'general library' to 'my library'</p>
          <p>
            4) Create a category <br />
            (inside a category you can add an unlimited number of pages)
          </p>
          <p>5) Create a page in that category and open it by clicking on it</p>
          <p>6) Press "edit page"</p>
          <p>
            7) Add an example by entering the 2 textfields. The 1st textfield is
            for your code. The 2nd textfield is optional, it can show the result
            of your code.
          </p>
          <p>8) Return to the view mode of your page by pressing "view page"</p>
        </div>
      </div>
    </>
  );
}

export default Homepage;
