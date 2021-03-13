import classNames from 'classnames';
import React from 'react';

class MovieTabs extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.sort_by !== this.props.sort_by) {
            return true;
        }
        else return false;
    };

    render() {
        const { sort_by, updateSortBy } = this.props;

        const handleClick = value => {
            return () => {
                updateSortBy(value);
            };
        };

        // const getClassLink = (value) => {
        //     return `nav-link ${sort_by === value ? "active" : ""}`;
        // };

        const getClassNames = (value) => { 
            return classNames("nav-link", {"active": sort_by === value} ); 
        };

        return (
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div
                        className={getClassNames("popularity.desc")}
                        onClick={handleClick("popularity.desc")}
                    >
                        Popularity desc
                    </div>
                </li>
                <li className={`nav-item`}>
                    <div
                        className={getClassNames("revenue.desc")}
                        onClick={handleClick("revenue.desc")}
                    >
                        Revenue desc
                    </div>
                </li>
                <li className={`nav-item`}>
                    <div
                        className={getClassNames("vote_average.desc")}
                        onClick={handleClick("vote_average.desc")}
                    >
                        Vote average desc
                    </div>
                </li>
            </ul>
        );
    };
}

export default MovieTabs;