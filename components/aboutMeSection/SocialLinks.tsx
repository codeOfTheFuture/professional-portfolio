import { urlFor } from "sanity.config";
import { Social } from "types/typings";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import styles from "./scss/SocialLinks.module.scss";
import Image from "next/image";

interface Props {
	socials: Social[];
	image: SanityImageSource;
}

const SocialLinks = ({ socials, image }: Props) => {
	return (
		<div className={styles[`content__social__links`]}>
			<div className={styles[`content__social__links__image__wrapper`]}>
				<Image
					className={styles[`content__social__links__image`]}
					src={urlFor(image).url()}
					alt="Programming on a computer with multiple screens"
					fill
				/>
			</div>

			<div>
				<h3>Find me on Github & Linkedin</h3>
				<a target="_blank" href={socials[0].url}>
					{socials[0]?.title}
				</a>
				<br />
				<a target="_blank" href={socials[1].url}>
					{socials[1]?.title}
				</a>
			</div>
		</div>
	);
};

export default SocialLinks;
