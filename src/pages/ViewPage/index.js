import "./style.css";
import React, { useEffect } from "react";

import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCurrentPage } from "../../store/currentPage/actions";
import { selectCurrentPage } from "../../store/currentPage/selectors";

import Example from "../../components/Example";
import MainHeader from "../../components/MainHeader";
import MessageBox from "../../components/MessageBox";

function ViewPage() {
  const dispatch = useDispatch();
  const pageId = parseInt(useParams().pageId);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchCurrentPage(pageId));
  }, [dispatch, pageId]);

  return (
    <div>
      <MainHeader />
      <MessageBox />

      <div className="view-page">
        <h1>{currentPage.name}</h1>
        <Container fluid>
          {currentPage.examples.map((example) => (
            <Example
              key={example.id}
              codeblock={example.codeblock}
              output={example.output}
            />
          ))}
        </Container>
      </div>
    </div>
  );
}

export default ViewPage;
