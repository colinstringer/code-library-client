import "./style.css";
import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { fetchCurrentPage } from "../../store/currentPage/actions";
import { selectCurrentPage } from "../../store/currentPage/selectors";

import Example from "../../components/Example";
import MainHeader from "../../components/MainHeader";
import AddExample from "../../components/AddExample";
import MessageBox from "../../components/MessageBox";

function EditPage() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const pageId = parseInt(useParams().pageId);

  useEffect(() => {
    dispatch(fetchCurrentPage(pageId));
  }, [dispatch, pageId]);

  return (
    <div>
      <MainHeader />
      <MessageBox />
      <div className="view-page">
        <h1>Edit the '{currentPage.name}' page</h1>
        <Container fluid>
          {currentPage.examples.map((example) => (
            <Example
              key={example.id}
              codeblock={example.codeblock}
              output={example.output}
            />
          ))}
          <AddExample />
        </Container>
      </div>
    </div>
  );
}

export default EditPage;
