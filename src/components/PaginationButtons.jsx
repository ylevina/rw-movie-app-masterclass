import React from 'react';

class PaginationButtons extends React.Component {   
    render() {
        const { page, totalPages, prevPage, nextPage } = this.props;

        return (
            <div className="col-12 d-flex align-items-center justify-content-between">
                <button className="btn btn-secondary" onClick={prevPage}>Previous Page</button>
                <p>Page {page} of {totalPages}</p>
                <button className="btn btn-secondary" onClick={nextPage}>Next Page</button>
            </div>
        );
    };
}

export default PaginationButtons;