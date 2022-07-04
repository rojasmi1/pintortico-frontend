import 'preact';
import { ArtWork } from '../../types/contentful';
import Styles from './styles.module.scss';


type PorfolioPreviewProps = {
	artWork: ArtWork
}

function PortfolioPreview({ artWork }:PorfolioPreviewProps) {
	const { title, photo, dataSheet, tags = []} = artWork.fields;
	return (
		<div className={Styles.card}>
			<div className={Styles.titleCard} style={`background-image:url(${photo?.fields?.file?.url})`}>
				<h1 className={Styles.title}>{title}</h1>
			</div>
			<div className="pa3">
				<p className={`${Styles.desc} mt0 mb2`}>{dataSheet}</p>
				{
					tags?.length ? 
				<div className={Styles.tags}>
					Tagged:
					{tags.map((t) => (
						<div className={Styles.tag} data-tag={t}>
							{t}
						</div>
					))}
				</div> : null
				}
				<a className={Styles.link} href={`/gallery/${artWork?.sys?.id}`}>
					<span className={Styles.linkInner}>View</span>
				</a>
			</div>
		</div>
	);
}

export default PortfolioPreview;
