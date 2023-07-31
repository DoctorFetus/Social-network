import React, {useEffect, useState} from 'react';
import s from './Paginator.module.css';

type PaginatorPropsType = {
    currentPage: number,
    pageSize: number,
    totalUsersCount: number,
    onPageChanged: (page: number) => void
    portionSize?: number
}
const Paginator = ({currentPage, pageSize, totalUsersCount, onPageChanged, portionSize = 10}: PaginatorPropsType) => {

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize))
    }, [])

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionNumber = portionNumber * portionSize

    const btnClass = `${s.pageSelector} ${s.btn}`

    return (<div className={s.paginator}>

            {portionNumber > 1 &&
                <button className={btnClass} onClick={() => setPortionNumber(portionNumber - 1)}>{"<"}</button>}
            <div className={s.pagesContainer}>
                {pages.filter((p => p >= leftPortionPageNumber && p <= rightPortionNumber)).map(page => {
                    return <span
                        key={page}
                        className={currentPage === page ? `${s.pageSelector} ${s.activePage}` : s.pageSelector}
                        onClick={() => onPageChanged(page)}
                    >{page}</span>
                })}
            </div>
            {portionNumber < portionCount &&
                <button className={btnClass} onClick={() => setPortionNumber(portionNumber + 1)}>{">"}</button>}
        </div>
    );
};

export default Paginator;