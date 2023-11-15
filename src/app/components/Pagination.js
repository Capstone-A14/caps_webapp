import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
import "./pagination.css";
import { ArrowLeftCircleIcon, ArrowLeftIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ol className={classnames('pagination-container', className)}>
      <li
        key="previous"
        className={classnames('pagination-item arrow text-black', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <ArrowLeftCircleIcon className="w-6"/>
      </li>
      {paginationRange.map((pageNumber, index) => (
        <li
          key={index}
          className={classnames('pagination-item', {
            dots: pageNumber === DOTS,
            selected: pageNumber === currentPage,
            disabled: pageNumber === DOTS && (index === 0 || index === paginationRange.length - 1),
          })}
          onClick={() => pageNumber !== DOTS && onPageChange(pageNumber)}
        >
          {pageNumber === DOTS ? '...' : pageNumber}
        </li>
      ))}
      <li
        key="next"
        className={classnames('pagination-item arrow text-black ', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <ArrowRightCircleIcon className="w-6" />
      </li>
    </ol>
  );
};

export default Pagination;
