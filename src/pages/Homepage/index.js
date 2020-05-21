import "./style.css";
import React from "react";
import MessageBox from "../../components/MessageBox";

function Homepage() {
  return (
    <>
      <MessageBox />

      <div className="homepage">
        <div className="homepage-content">
          <h2>So what is this project called the Code Library all about?</h2>
          <p>
            If you're a programmer, I'm sure you encounter this situation very
            often: you need a specific code snippet about some topic that you
            roughly understand, but you don't know how to write it from memory.
          </p>
          <p>What's the first thing you do? You google the topic.</p>
          <p>
            Best case scenario? The first page you open has lots of ready-to-use
            variations of code about your topic. You find what you're looking
            for in a matter of seconds.
          </p>
          <p>
            Reality? Often enough you end up skimming through a bunch of pages
            that consist for 80-90% out of explanations about the topic and also
            lots of unrelated topics, and only contain 10-20% of actual code
            snippets.
          </p>
          <p>
            This is extremely counterproductive, and frankly just plain
            annoying. It would be much better if there would be one organized
            website that has lots of ready-to-use code variations with the
            smallest necessary amount of verbal explanation.
          </p>
          <p>
            I don't think anyone values efficiency more than programmers do. At
            least me personally, I care a lot about efficiency, especially when
            it comes to having quick, agile, easy-to-find code. That's why I
            decided to create this website.
          </p>

          <h2>The Code Library potential</h2>
          <p>
            The current version of The Code Library doesn't yet go all the way
            in optimizing this issue. There's lots of future potential though.
            However, even now there's a powerful feature that allows users to
            create and organize their own code snippet collection, in what is
            called a 'personal library'. It becomes instantly available when you
            sign up.
          </p>
          <p>So the 2 current features are:</p>
          <p>1) You can create and organize your own code library</p>
          <p>
            2) There's a general code library with code snippets that anyone can
            copy paste to their heart's content
          </p>

          <h2>Instructions for a personal library</h2>
          <p>1) Create an account or login</p>
          <p>2) Press "my library"</p>
          <p>
            3) Open the sidebar, and add a category.
            <br />
            (inside a category you can add an unlimited number of pages)
          </p>
          <p>4) Create a page and open it by clicking on it</p>
          <p>5) Press "edit page"</p>
          <p>
            6) Add an example by entering the 2 textfields. The 1st textfield is
            for your code. The 2nd textfield is optional, it's for when your
            code has an output.
          </p>
          <p>7) Return to the view mode of your page by pressing "view page"</p>
        </div>
      </div>
    </>
  );
}

export default Homepage;
