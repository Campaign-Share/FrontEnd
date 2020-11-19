import React, { useEffect, useState } from 'react';
import * as S from './style';
import { medal1, medal2, medal3, profile } from '../../assets/img/index';
import CampaignSearchHeader from '../common/CampaignSearchHeader/CampaignSearchHeader';
import { requestApiWithAccessToken } from '../../APIrequest';

const Ranking = () => {
	let [first, setFirst] = useState([]);
	let [second, setSecond] = useState([]);
	let [third, setThird] = useState([]);
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
		});
	}, []);

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
								{second.profile_uri ? (
									<S.UserImg src={imgUrl + second.profile_uri} />
								) : (
									<S.UserImg src={profile} />
								)}
								<S.User>{second.nick_name}</S.User>
								{second.campaign_number && (
									<S.UserInfo>
										참여한 캠페인 : {second.campaign_number.participate}
									</S.UserInfo>
								)}
								{second.campaign_number && (
									<S.UserInfo>
										등록한 캠페인 : {second.campaign_number.approved}
									</S.UserInfo>
								)}
							</S.InfoBox>
						</S.SecondBox>
						<S.FirstBox>
							<S.FirstMedal src={medal1} />
							<S.InfoBox>
								{first.profile_uri ? (
									<S.FirstUser src={imgUrl + first.profile_uri} />
								) : (
									<S.FirstUser src={profile} />
								)}
								<S.User>{first.nick_name}</S.User>
								{first.campaign_number && (
									<S.UserInfo>
										참여한 캠페인 : {first.campaign_number.participate}
									</S.UserInfo>
								)}
								{first.campaign_number && (
									<S.UserInfo>
										등록한 캠페인 : {first.campaign_number.approved}
									</S.UserInfo>
								)}
							</S.InfoBox>
						</S.FirstBox>
						<S.ThirdBox>
							<S.Medal src={medal3} />
							<S.InfoBox>
								{third.profile_uri ? (
									<S.ThirdUser src={imgUrl + third.profile_uri} />
								) : (
									<S.ThirdUser src={profile} />
								)}
								<S.User>{third.nick_name}</S.User>
								{third.campaign_number && (
									<S.UserInfo>
										참여한 캠페인 : {third.campaign_number.participate}
									</S.UserInfo>
								)}
								{third.campaign_number && (
									<S.UserInfo>
										등록한 캠페인 : {third.campaign_number.approved}
									</S.UserInfo>
								)}
							</S.InfoBox>
						</S.ThirdBox>
					</S.UserContainer>
				</S.ContentContainer>
			</S.RankingContainer>
		</React.Fragment>
	);
};

export default Ranking;
