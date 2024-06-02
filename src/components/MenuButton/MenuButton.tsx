import { memo, useMemo } from "react";
import styles from "./MenuButton.module.scss";

interface Props {
    tag: string;
    handleClickTag: (tag: string) => void;
    activeTag: string;
}

const MenuButton: React.FC<Props> = ({ tag, handleClickTag, activeTag }) => {
    const isActive = useMemo(() => activeTag === tag, [activeTag, tag]);
    const onClick = () => handleClickTag(tag);

    return (
        <li className={styles.menuBtn}>
            <button
                onClick={onClick}
                className={`${styles.menuBtn__btn} ${
                    isActive ? styles.menuBtn__btn_active : ""
                }`}
            >
                {tag}
            </button>
        </li>
    );
};

const areEqual = (prevProps: Props, nextProps: Props) => {
    const prevIsActive = prevProps.activeTag === prevProps.tag;
    const nextIsActive = nextProps.activeTag === nextProps.tag;

    return prevIsActive === nextIsActive && prevProps.tag === nextProps.tag;
};

export default memo(MenuButton, areEqual);
