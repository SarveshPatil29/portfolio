import Link from "next/link";
import Image from "next/image";
import add from "../../public/images/add.png";

export default function AddBtn(props) {
    return (
        <div>
            <Link href="https://github.com/SarveshPatil46">
                <Image width={props.width} height={props.height} src={add} />
            </Link>
            <Link href="https://github.com/SarveshPatil46">
                <h5 style={{ marginTop: 10 }}>
                    ADD A NEW {props.item.toUpperCase()}
                </h5>
            </Link>
        </div>
    );
}
