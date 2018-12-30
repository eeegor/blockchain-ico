import React from 'react';
import { theme } from '../styled/theme';
import {
	H1,
	H2,
	H4,
	H5,
	H6,
	Paragraph,
	Text,
	TitleUppercase,
	Container,
	Grid,
	Hr,
	Button,
	Header,
	Content,
	Card,
	A,
	TextSmall,
	CardIcon
} from '../styled';
import {
	Logo,
	ArrowLeft,
	IconEtherium,
	IconBitcoin,
	IconLitecoin
} from '../components';

export const Styleguide = () => {
	const { colors } = theme;
	return (
		<div className="styleguide">
			<Header>
				<Container center>
					<Logo color={colors.primaryDarkBlue} />
				</Container>
			</Header>
			<Content top={[60, 84]}>
				<Container>
					<H2 marginBottom={24}>Typography</H2>
					<H1>H1 Blockchain Ico</H1>
					<H2>H2 Blockchain Ico</H2>
					<H4>H4 Blockchain Ico</H4>
					<H5>H5 Blockchain Ico</H5>
					<H6>H6 Blockchain Ico</H6>
					<Text>
						Text: Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. At et accusantium nemo provident?
					</Text>
					<Paragraph>
						Paragraph: Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. At et accusantium nemo provident?
					</Paragraph>
				</Container>
				<Hr />
				<Container>
					<H2 marginBottom={24}>Grid</H2>
					<Grid columns={[1, 3]}>
						<Text>
							Text: Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. At et accusantium nemo provident?
						</Text>
						<Text>
							Text: Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. At et accusantium nemo provident?
						</Text>
						<Text>
							Text: Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. At et accusantium nemo provident?
						</Text>
						<Text>
							Text: Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. At et accusantium nemo provident?
						</Text>
						<Text>
							Text: Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. At et accusantium nemo provident?
						</Text>
						<Text>
							Text: Lorem ipsum dolor sit amet, consectetur
							adipisicing elit. At et accusantium nemo provident?
						</Text>
					</Grid>
				</Container>
				<Hr />
				<Container>
					<H2 marginBottom={24}>Buttons</H2>
					<Grid columns={[2, 3, 4]}>
						<div>
							<Paragraph>Default</Paragraph>
							<Button>Click me</Button>
						</div>
						<div>
							<Paragraph>Outline</Paragraph>
							<Button outline>Click me</Button>
						</div>
						<div>
							<Paragraph>Primary</Paragraph>
							<Button primary>Click me</Button>
						</div>
						<div>
							<Paragraph>Success</Paragraph>
							<Button success>Click me</Button>
						</div>
						<div>
							<Paragraph>Danger</Paragraph>
							<Button danger>Click me</Button>
						</div>
						<div>
							<Paragraph>Token</Paragraph>
							<Button token>Click me</Button>
						</div>
					</Grid>
				</Container>
				<Hr />
				<Container>
					<H2 marginBottom={24}>Cards</H2>
					<Grid columns={3}>
						<Card withIcon>
							<CardIcon>
								<IconEtherium />
							</CardIcon>
							<div>
								<TitleUppercase>Etherium</TitleUppercase>
								<TextSmall marginBottom={8}>
									Buy in the Top 10 cryptocurrencies rely on
									the market instead of
								</TextSmall>
								<A href="#">
									Read more <ArrowLeft />
								</A>
							</div>
						</Card>
						<Card noBg withIcon>
							<CardIcon>
								<IconBitcoin />
							</CardIcon>
							<div>
								<TitleUppercase>Bitcoin</TitleUppercase>
								<TextSmall marginBottom={8}>
									ETFs outperform mutual funds. They are the
									perfect way to invest in
								</TextSmall>
								<A href="#">
									Read more <ArrowLeft />
								</A>
							</div>
						</Card>
						<Card noBg withIcon>
							<CardIcon>
								<IconLitecoin />
							</CardIcon>
							<div>
								<TitleUppercase>Litecoin</TitleUppercase>
								<TextSmall marginBottom={8}>
									Buy Real Estate in form of Funds or REITS
									and get your monthly rent
								</TextSmall>
								<A href="#">
									Read more <ArrowLeft />
								</A>
							</div>
						</Card>
					</Grid>
				</Container>
			</Content>
		</div>
	);
};

export default Styleguide;
