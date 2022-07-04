import React, { useEffect, useState } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";

export interface IRow {
  id: string;
  name?: string;
  price?: string;
  comments?: string;
  status: string;
}

export const columns = [
  {
    dataField: "id",
    text: "Product ID",
    headerWidth: 25,
    formatter: (cellContent: any, row: IRow, rowIndex: number) => {
      return (
        <p>
          <span style={{ width: "10%" }} className="truncate">
            {row.id}
          </span>
        </p>
      );
    },
  },
  {
    dataField: "name",
    text: "Product Name",
    formatter: (cellContent: any, row: IRow, rowIndex: number) => {
      return (
        <p>
          <span style={{ maxWidth: "100px" }} className="truncate">
            {row.name}
          </span>
        </p>
      );
    },
  },
  {
    dataField: "price",
    text: "Product Price",
    formatter: (cellContent: any, row: IRow, rowIndex: number) => {
      return (
        <p>
          <span style={{ maxWidth: "100px" }} className="truncate">
            {row.price}
          </span>
        </p>
      );
    },
  },
  {
    dataField: "comments",
    text: "Comments",
    formatter: (_cellContent: any, row: IRow, rowIndex: number) => {
      return <CommentFormatter content={row.comments as string} />;
    },
  },
  {
    dataField: "status",
    text: "Status",
    formatter: (cellContent: any, row: IRow, rowIndex: number) => {
      return (
        <p>
          <span style={{ maxWidth: "100px" }} className="truncate">
            {row.status}
          </span>
        </p>
      );
    },
  },
];

export const rows = [
  {
    id: "EKH:905:RF:0123",
    name: "Alex",
    price: "30$",
    status: "DRAFT",
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: "EKH:905:RF:0123",
    name: "Alex",
    price: "30$",
    status: "PENDING_REVIEW",
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,labore et dolore magna aliqua",
  },
  {
    id: "DFE:905:RF:01345",
    name: "Mark",
    price: "20$",
    status: "DRAFT",
    comments: "Lorem ipsum dolor sit amet",
  },
  {
    id: "GHB:905:RF:0145",
    name: "Monica",
    price: "$65",
    status: "PENDING_REVIEW",
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,labore et dolore magna aliqua",
  },
  {
    id: "HJF:905:RF:4523",
    name: "Phoebe",
    price: "35$",
    status: "PENDING_REVIEW",
    comments:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,labore et dolore magna aliqua",
  },
  {
    id: "YUC:905:RF:0673",
    name: "Eddy",
    price: "18$",
    status: "PENDING_REVIEW",
    comments: "Lorem ipsum dolor sit amet",
  },
];

const CommentFormatter = (props: { content: string }) => {
  const { content } = props;
  let [rowExpand, setRowExpand] = useState(false);
  let [showExpandIcon, setShowExpandIcon] = useState(false);
  const handleRowExpandToggle = () => {
    setRowExpand(!rowExpand);
  };
  // useEffect(() => {
  //   const rowText = document.getElementsByClassName(rowClassName)
  //     ? document.getElementsByClassName(rowClassName)[0]
  //     : undefined;
  //   if (rowText) {
  //     const { clientWidth, clientHeight, scrollWidth, scrollHeight } = rowText;
  //     const isTextOverflow = isOverflown(
  //       clientWidth,
  //       clientHeight,
  //       scrollWidth,
  //       scrollHeight
  //     );
  //     if (isTextOverflow) {
  //       setShowExpandIcon(true);
  //     }
  //   }
  // }, []);

  const rowClassName = rowExpand ? "" : "row-wrap";

  return (
    <div className="tb-cell-commment">
      <p className={rowClassName}>
        <span>{content}</span>
      </p>
      <span className="row-icon-expand" onClick={handleRowExpandToggle}>
        <FaExpandArrowsAlt />
      </span>
    </div>
  );
};

const isOverflown = (
  clientWidth: number,
  clientHeight: number,
  scrollWidth: number,
  scrollHeight: number
) => {
  return scrollHeight > clientHeight || scrollWidth > clientWidth;
};
