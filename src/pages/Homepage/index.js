import "./style.css";
import React from "react";

import MessageBox from "../../components/MessageBox";

function Homepage() {
  return (
    <>
      <MessageBox />
      <div className="homepage">
        <div className="homepage-content">
          <h2 style={{ marginTop: "10px" }}>
            Have you ever encountered this situation?
          </h2>
          <p>
            You're programming a feature you know you've created elsewhere, or
            you've seen it somewhere on the web, and you want to copy it instead
            of starting again from scratch. But you can't remember where exactly
            it was.
          </p>

          <p>
            3 dusty old projects, and 10 google searches later yet you still
            haven't found what you were looking for. If only there was a way to
            save all of our important reusable code in one place.
          </p>

          <h3>
            Because I encountered this problem many times over I decided to
            create the code library.
          </h3>

          <p>
            The Code Library is a platform where you can store and organize as
            many code snippets as you like.
          </p>

          <p>
            But the code library isn't simply for storing your own code. It's
            also a place to share your code with people all across the world. 
            (this feature is still in development)
          </p>

          <p>
            There is a general library with code snippets that everyone can
            access.
            <br />
            Once you have an account and are logged in, you are able to create
            your own code library.
          </p>

          <h2>Instructions for a personal library</h2>

          <p>1) Create an account or login</p>

          <p>2) Press "my library"</p>

          <p>3) In the sidebar, add a category and then inside that category add a page</p>

          <p>4) Open the page by clicking on it</p>

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
