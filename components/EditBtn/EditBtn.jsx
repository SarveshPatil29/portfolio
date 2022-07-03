import Link from "next/link";
import Image from "next/image";
import edit from "../../public/images/edit2.png";

export default function EditBtn(props) {
    return (
        <div>
            <Link href="https://github.com/SarveshPatil46">
                <Image width={props.width} height={props.height} src={edit} />
            </Link>
        </div>
    );
}
