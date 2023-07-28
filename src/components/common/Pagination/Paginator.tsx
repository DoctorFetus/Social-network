import React from 'react';
import s from './Paginator.module.css';

type PaginatorPropsType = {
    currentPage: number,
    pageSize: number,
    totalUsersCount: number,
    onPageChanged: (page: number) => void
}
const Paginator = ({currentPage, pageSize, totalUsersCount, onPageChanged}: PaginatorPropsType) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.pagesContainer}>
            {pages.map(page => {
                if (page <= 10) {
                    return <span
                        key={page}
                        className={currentPage === page ? `${s.pageSelector} ${s.activePage}` : s.pageSelector}
                        onClick={() => onPageChanged(page)}
                    >{page}</span>
                }
            })}
        </div>
    );
};

export default Paginator;