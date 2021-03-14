import React from 'react';

class PaginationButtons extends React.Component {   
    render() {
        const { page, totalPages, prevPage, nextPage } = this.props;

        return (
            <div className="col-12 d-flex align-items-center justify-content-between">
                <button onClick={prevPage}>Prev</button>
                <p>Page {page} of {totalPages}</p>
                <button onClick={nextPage}>Next</button>
            </div>
        );
    };
}

export default PaginationButtons;