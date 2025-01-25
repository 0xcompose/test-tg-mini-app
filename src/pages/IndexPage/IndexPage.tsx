import { Section, Cell, Image, List } from "@telegram-apps/telegram-ui";
import type { FC } from "react";

import { Link } from "@/components/Link/Link.tsx";
import { Page } from "@/components/Page.tsx";

import tonSvg from "./ton.svg";

export const IndexPage: FC = () => {
	return (
		<Page back={false}>
			<List>
				<Section
					header="Hello, monseiur"
					footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
				>
					<Link to="/ton-connect">
						<Cell
							before={
								<Image src={tonSvg} style={{ backgroundColor: "#007AFF" }} />
							}
							subtitle="Connect your TON wallet"
						>
							TON Connect
						</Cell>
					</Link>
				</Section>
				<Section
					header="Application Info"
					footer="These pages help developer to understand that this app is useless"
				>
					<Link to="/init-data">
						<Cell subtitle="how how how how...">How</Cell>
					</Link>
					<Link to="/launch-params">
						<Cell subtitle="who we?">Did we</Cell>
					</Link>
					<Link to="/theme-params">
						<Cell subtitle="what?">Got here?</Cell>
					</Link>
				</Section>
			</List>
		</Page>
	);
};
