//components
import { Link } from 'react-router-dom'
import { useCallback } from 'react'

//types
import type { FC } from 'react'
import type { ISearch } from '../../../Types/ISearch'

const Logo: FC<ISearch> = ({
    setMobileSearch,
    toggleAllPopups,
    mobileSearch,
}) => {
    const handleSearchPopup = useCallback(() => {
        setMobileSearch(false)
        toggleAllPopups()
    }, [setMobileSearch, toggleAllPopups])

    return (
        <div className="left-side">
            <div className="search-button-mobile">
                <img
                    className="search-icon-mobile"
                    src="https://i.imgur.com/H5vidBM.png"
                    alt="search"
                    onClick={() => {
                        mobileSearch
                            ? handleSearchPopup()
                            : setMobileSearch(true)
                    }}
                ></img>
            </div>
            <div className="menu-button">
                <Link to={'/'}>
                    <img
                        className="menu-image"
                        alt="menu"
                        src="https://i.imgur.com/5cpIO2x.png"
                    ></img>
                </Link>
            </div>

            <Link to={'/store'} className="header-link">
                <h1 className="logo-font">Just Enough Games</h1>
            </Link>
        </div>
    )
}

export default Logo
