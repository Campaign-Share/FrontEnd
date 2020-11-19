import React, { useEffect, useState } from 'react';
import * as S from './style';
import { medal1, medal2, medal3, profile } from '../../assets/img/index';
import CampaignSearchHeader from '../common/CampaignSearchHeader/CampaignSearchHeader';
import { requestApiWithAccessToken } from '../../APIrequest';

const Ranking = () => {
	let [first, setFirst] = useState([]);
	let [second, setSecond] = useState([]);
	let [third, setThird] = useState([]);
	let [data, setData] = useState({
		frist: [],
		second: [],
		third: [],
	});
	let [isImg, setIsImg] = useState(false);
	const imgUrl = 'https://campaignshare.s3.ap-northeast-2.amazonaws.com/';
	useEffect(() => {
		requestApiWithAccessToken(
			`/v1/users/sorted-by/participate?start=0&count=3`,
			{},
			{},
			'get',
		).then((res) => {
			setFirst(res.data.user_informs[0]);
			setSecond(res.data.user_informs[1]);
			setThird(res.data.user_informs[2]);
			// setData(...data, data.first)
		});
	}, []);

	// if (
	// 	second.profile_uri === null ||
	// 	first.profile_uri === null ||
	// 	third.profile_uri === null
	// ) {
	// 	setIsImg(true);
	// } else setIsImg(false);

	console.log(second.campaign_number);
	return (
		<React.Fragment>
			<S.RankingContainer>
				<CampaignSearchHeader />
				<S.ContentContainer>
					<S.HeaderBox>이달의 명예의 전당</S.HeaderBox>
					<S.UserContainer>
						<S.SecondBox>
							<S.Medal src={medal2} />
							<S.InfoBox>
								{isImg ? (
									<S.UserImg src={imgUrl + second.profile_uri} />
								) : (
									<S.UserImg src={profile} />
								)}
								<S.User>{second.nick_name}</S.User>
								<S.UserInfo>참여한 캠페인 : 10</S.UserInfo>
								<S.UserInfo>등록한 캠페인 : 5</S.UserInfo>
							</S.InfoBox>
						</S.SecondBox>
						<S.FirstBox>
							<S.FirstMedal src={medal1} />
							<S.InfoBox>
								<S.FirstUser src={imgUrl + first.profile_uri} />
								<S.User>{first.nick_name}</S.User>
								<S.UserInfo>참여한 캠페인 : 20</S.UserInfo>
								<S.UserInfo>등록한 캠페인 : 8</S.UserInfo>
							</S.InfoBox>
						</S.FirstBox>
						<S.ThirdBox>
							<S.Medal src={medal3} />
							<S.InfoBox>
								{/* <S.ThirdUser src={imgUrl + second.profile_uri} /> */}
								<S.ThirdUser src={profile} />
								<S.User>{third.nick_name}</S.User>
								<S.UserInfo>참여한 캠페인 : 8</S.UserInfo>
								<S.UserInfo>등록한 캠페인 : 2</S.UserInfo>
							</S.InfoBox>
						</S.ThirdBox>
					</S.UserContainer>
				</S.ContentContainer>
			</S.RankingContainer>
		</React.Fragment>
	);
};

export default Ranking;
