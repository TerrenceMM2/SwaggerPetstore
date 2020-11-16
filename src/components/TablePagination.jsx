import React from 'react'
import { Pagination } from "react-bootstrap"

export default function TablePagination(props) {
    const { offset, pages, handleOffset } = props

    let previous;
    let next;

    let twoBack;
    let oneBack;
    let oneForward;
    let twoForward;

    console.log(offset)

    // First page, does not show back arrow
    if (offset === 0) {
        previous = <></>
    } else {
        previous = <Pagination.Prev onClick={handleOffset} data-offset={offset - 1} />
    }

    // Last page, does not show forward arrow
    if ((pages - offset) < 2) {
        next = <></>
    } else {
        next = <Pagination.Next onClick={handleOffset} data-offset={offset + 1}/>
    }

    if (offset === 1) {
        oneBack = <Pagination.Item onClick={handleOffset} data-offset={offset}>{offset}</Pagination.Item>
    }

    // 
    if (offset >= 2) {
        oneBack = <Pagination.Item onClick={handleOffset} data-offset={offset}>{offset}</Pagination.Item>
        twoBack = <Pagination.Item onClick={handleOffset} data-offset={offset - 1}>{offset - 1}</Pagination.Item>
    }

    return (
        <div>
            <Pagination>
                <Pagination.First onClick={handleOffset} data-offset={0}/>
                {previous}

                {twoBack}
                {oneBack}
                <Pagination.Item onClick={handleOffset} data-offset={offset} active>{offset + 1}</Pagination.Item>
                {oneForward}
                {twoForward}

                {next}
                <Pagination.Last onClick={handleOffset} data-offset={pages}/>
            </Pagination>
        </div>
    )
}
