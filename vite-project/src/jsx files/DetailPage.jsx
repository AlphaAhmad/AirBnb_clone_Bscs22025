import PropTypes from 'prop-types';
function Detail({ MovieSrc, MovieName, Description }) {
    return (
            <>
                <div className="ImgAndName">
                    <div className="Thumbnail"><img src={MovieSrc} alt="MovieImg" /></div>
                        <h1>{MovieName}</h1>
                </div>
                <p>
                    {Description}
                </p>
            </>
            );
};


// Define propTypes to validate the props   
Detail.propTypes = {
    MovieSrc: PropTypes.string.isRequired,
    MovieName: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
};

export default Detail;


