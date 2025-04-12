import styles from "../page.module.css";

export default function Home() {
    return (
        <div className={styles.bbb}>
            <Container title="Hellow">
                <p></p>
            </Container>
        </div>
    );
}

type ContainerProps = {
    title: string
    children: React.ReactNode
}
const Container = (props: ContainerProps) => {
    const { title, children} = props
    console.log("Containerが描画されました")
    return (
        <p>{title}</p>
    )
}