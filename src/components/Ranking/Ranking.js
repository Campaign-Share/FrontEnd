import React from 'react';
import SideBar from '../Navigation/sideBar/SideBar';
import * as S from './style';
import { medal1, medal2, medal3 } from '../../assets/img/index';

const Ranking = () => {
	return (
		<React.Fragment>
			<S.RankingContainer>
				<SideBar />
				<S.ContentContainer>
					<S.HeaderBox>이달의 명예의 전당</S.HeaderBox>
					<S.UserContainer>
						<S.SecondBox>
							<S.Medal src={medal2} />
							<S.InfoBox>
								<S.UserImg />
								<S.UserInfo>참여한 캠페인 : 15</S.UserInfo>
								<S.UserInfo>등록한 캠페인 : 5</S.UserInfo>
							</S.InfoBox>
						</S.SecondBox>
						<S.FirstBox>
							<S.FirstMedal src={medal1} />
							<S.InfoBox>
								<S.FirstUser />
								<S.UserInfo>참여한 캠페인 : 20</S.UserInfo>
								<S.UserInfo>등록한 캠페인 : 8</S.UserInfo>
							</S.InfoBox>
						</S.FirstBox>
						<S.ThirdBox>
							<S.Medal src={medal3} />
							<S.InfoBox>
								<S.ThirdUser />
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
