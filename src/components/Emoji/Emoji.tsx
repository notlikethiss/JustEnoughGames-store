//styles
import './emoji.style.scss'

//types
import type { FC } from 'react'

interface IEmoji {
    src: string
    variant: 'inButton' | 'inSearch'
}

const Emoji: FC<IEmoji> = (emoji) => {
    return (
        <div className="emoji-container">
            <img alt="emoji" className={emoji.variant} src={emoji.src} />
        </div>
    )
}

export default Emoji
