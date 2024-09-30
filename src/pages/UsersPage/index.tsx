import { FC } from "react";

import "./index.scss";
import { MainLayout } from "../../Layouts";
import { CustomSearch, CustomTag } from "../../components";
import { ListItem } from "../../components";

import { EllipsisOutlined } from "@ant-design/icons";

export const UsersPage: FC = () => {
	return (
		<MainLayout>
			<div className="users-page">
				<h1>Users</h1>
				<CustomSearch />
				<div className="users-page__list">
					<ListItem
						title="Andrew"
						control={
							<CustomTag tagname="admin" color="#E1FCDE" />
						}
						button={<EllipsisOutlined />}
					/>
                    <ListItem
						title="Andrew"
						control={
							<CustomTag tagname="user" color="#E0EDFF" />
						}
						button={<EllipsisOutlined />}
					/>
                    <ListItem
						title="Andrew"
						control={
							<CustomTag tagname="user" color="#E0EDFF" />
						}
						button={<EllipsisOutlined />}
					/>
                    <ListItem
						title="Andrew"
						control={
							<CustomTag tagname="user" color="#E0EDFF" />
						}
						button={<EllipsisOutlined />}
					/>
				</div>
			</div>
		</MainLayout>
	);
};

