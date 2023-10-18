import { useState } from 'react'

//components
import Logo from './Logo/Logo'
import ActionPanel from './ActionPanel/ActionPanel'
import Search from './Search/Search'
import Cart from '../Cart/Cart'

//styles
import './header.style.scss'
import HandleSearch from './Search/HandleSearch'

//types
import type { FC } from 'react'

const Header: FC = () => {
    const [visibleSearch, setVisibleSearch] = useState<boolean>(false)
    const [visibleCart, setVisibleCart] = useState<boolean>(false)
    const [mobileSearch, setMobileSearch] = useState<boolean>(false)

    const [searchValue, setSearchValue] = useState<string>('')

    const toggleAllPopups = () => {
        setVisibleCart(false)
        setMobileSearch(false)
        setVisibleSearch(false)
        setSearchValue('')
    }

    return (
        <header className="header">
            <div className="internal-header">
                <Logo
                    setVisibleSearch={setVisibleSearch}
                    setMobileSearch={setMobileSearch}
                    toggleAllPopups={toggleAllPopups}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    mobileSearch={mobileSearch}
                />
                <Search
                    setVisibleSearch={setVisibleSearch}
                    setMobileSearch={setMobileSearch}
                    toggleAllPopups={toggleAllPopups}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    mobileSearch={mobileSearch}
                />
                <ActionPanel
                    visibleCart={visibleCart}
                    setVisibleCart={setVisibleCart}
                />
            </div>

            <HandleSearch
                setVisibleSearch={setVisibleSearch}
                toggleAllPopups={toggleAllPopups}
                setSearchValue={setSearchValue}
                setMobileSearch={setMobileSearch}
                visibleSearch={visibleSearch}
                searchValue={searchValue}
                mobileSearch={mobileSearch}
            />
            <Cart setVisibleCart={setVisibleCart} visibleCart={visibleCart} />

            {visibleCart || visibleSearch || mobileSearch ? (
                <div onClick={() => toggleAllPopups()} className="overlay" />
            ) : null}
        </header>
    )
}

export default Header
