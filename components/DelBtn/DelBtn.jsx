import Link from "next/link";
import Image from "next/image";
import del from "../../public/images/delete.png";

export default function DelBtn(props) {
    return (
        <div>
            <Link href="https://github.com/SarveshPatil46">
                <Image
                    width={props.width}
                    height={props.height}
                    src={del}
                    alt="del-btn"
                />
            </Link>
        </div>
    );
}
