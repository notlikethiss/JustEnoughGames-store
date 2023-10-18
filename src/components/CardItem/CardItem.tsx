import { useCallback, useState } from 'react'

//types
import { ICardItem } from '../../Types/ICardItem'
import type { FC } from 'react'

//redux-toolkit
import { useAppDispatch } from '../../hooks'
import { addToCart } from '../../store/slices/cartSlice'

//styles
import './carditem.style.scss'
import { Link } from 'react-router-dom'
import Emoji from '../Emoji/Emoji'

const CardItem: FC<ICardItem> = (product) => {
    const [buttonText, setButtonText] = useState<string>('В корзину')

    const privateURL: string = `/products/${product.name}`

    const dispatch = useAppDispatch()

    const cartHandler = useCallback(() => {
        dispatch(addToCart(product))
        setButtonText('Добавлено')
        setTimeout(() => setButtonText('В корзину'), 1000)
    }, [product, setButtonText, dispatch])

    const loadingImage: string =
        'https://lh3.googleusercontent.com/Al8rMIGJ0QnWqyekCmRhjDy_J6g5MkMbSPfYFMXJQN6yxQ9XaXmmX6U7DpOAUpvpUpvg-VoV8VB15AmHdPOXOiUmn6xbomVUBbzATyFtBr-6Y9tW3jyl_UwEph57CVnuMYNmdmTVRcv8hyWhTNWkXJ-JmxpjJ5b1prnlkQMAUzib5rr9RblV_MF99jQsfDXJL5SyRwcDbliPXTY5QbAhAzpFgjEY6q-kns25LJg-Ap5I-GMzAvqSw9Gkfi8qvhA6DeIT1lJEZmHbU8y8NHn0ROH6biTao80aqy1ckx_JITZ88nWOIzUFRRrxV2K7wBiBa3rjILTcgb6YhM0W_I3Y5Op1GL3H5OfLSobHnE1tr0PnvcleFTH8J_4c_TGH6mMzbzrlyr_M5A_ZecfHSfQ8ERquOGnZg2F-aJjM7Xtz0wZ_UTGYh5mQB00H136MGOgpEu4eqeoQiQwQTicxvfcsKNZ7T1n1Kwsz2FzHgQOMCgE9c1Bf1hMAVKXA-MK8qdRjCHI7LUbhIU_w9IkMwaTbc3VGP_SzipfIbwXgilpbzgYjTmdCz9D9QJNsXVwXa4uLERUTwj93oObylSjhOmQW7-aBbFs3dfxobiTrsGwHsbog37OwVn0Su4h0T0Wh9LiafaYpKk4c7CFHgfYsoMZ3VgUDT9KeglfBEVum-79L_nFt-Hd_7m4mZJN7S5iTeuoHgCzM-JVzzw8zY7KR_D445ULgLhgAkj0mGjndAU58x479hulb27wkBXay7UZoVXwvPHMtEYdtwdOX_F-uPkw_78PTDZnwee7V3VRyh6NpDjm0yMtQu4yhuAh-eVJP2WeBPPFZhpwmVHJOUick1fYNGZw1swZJ45Dv_RklRyAEKuSeFlsTJaEjC-oJBcZ-_gGI-iofDQKNZsKoq1s7mlHLSalljQx8aFbtiktiXquUeSdwtN4tLJclHtRhNkNixKIcO5kN676xabA1C-9hc6r3vNaTHxE2G4jNRGFDNrfetlROl2RuCQ=w516-h491-s-no?'

    return (
        <div className="carditem">
            <Link to={privateURL} className="carditem-link">
                <div
                    className="carditem-image"
                    style={{
                        backgroundImage: product.image
                            ? `url(${product.image})`
                            : `url(${loadingImage})`,
                    }}
                ></div>
            </Link>
            <div className="carditem-controls">
                <h1 className={`carditem-name ${product.className}`}>
                    {product.name}
                </h1>
                <div className="carditem-desc-container">
                    <p className="carditem-description">
                        {product.description}
                    </p>
                </div>
                <div className="carditem-prices">
                    <span className="carditem-price">{product.price} ₽</span>
                    {product.discount ? (
                        <span className="carditem-discount">
                            {product.discount} ₽
                        </span>
                    ) : null}
                </div>
                <button onClick={cartHandler} className="carditem-button">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        className="card-button-container"
                    >
                        <Emoji
                            variant="inButton"
                            src={
                                buttonText === 'В корзину'
                                    ? '/emojis/cart.png'
                                    : '/emojis/success.png'
                            }
                        />
                        {buttonText}
                    </div>
                </button>
            </div>
        </div>
    )
}

export default CardItem
