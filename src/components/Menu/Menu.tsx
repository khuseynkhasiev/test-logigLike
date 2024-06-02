import { memo, useCallback } from "react";
import MenuButton from "../MenuButton/MenuButton";
import styles from "./Menu.module.scss";

interface Props {
    tags: string[];
    handleClickTag: (tag: string) => void;
    activeTag: string;
}

const Menu: React.FC<Props> = memo(({ tags, handleClickTag, activeTag }) => {
    const handleClick = useCallback(
        (tag: string) => {
            handleClickTag(tag);
        },
        [handleClickTag]
    );

    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__items}>
                <MenuButton
                    tag="Все темы"
                    handleClickTag={handleClick}
                    activeTag={activeTag}
                />
                {tags.map((tag, index) => (
                    <MenuButton
                        tag={tag}
                        key={index}
                        handleClickTag={handleClick}
                        activeTag={activeTag}
                    />
                ))}
            </ul>
        </nav>
    );
});

export default Menu;
