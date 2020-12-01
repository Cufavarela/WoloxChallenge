import React, { Suspense } from "react";
import Loader from "../../Components/Loader/Loader";

const ListContent = React.lazy(() => import("./Content"));

function List() {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <ListContent />
    </Suspense>
  );
}

export default List;
