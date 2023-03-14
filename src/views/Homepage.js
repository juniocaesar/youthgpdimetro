import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import backgroundImage from "../img/background.png";
// import Stack from "@mui/material/Stack";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Divider from "@mui/material/Divider";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormPendaftaran from "./FormPendaftaran";
const pages = ["Form Pendaftaran"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<Box
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
			}}
		>
			<AppBar sx={{ background: "#003177" }}>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Box
							sx={{ mr: 2, display: { xs: "none", md: "block" } }}
						>
							<img src={require("../img/logo.png")} width="40" />
						</Box>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="/"
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontFamily: "Roboto",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							YOUTH GPDI METRO
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
							}}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<MenuItem
										key={page}
										onClick={handleCloseNavMenu}
									>
										<Typography textAlign="center">
											{page}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Box
							sx={{
								flexGrow: 1,
								mr: 2,
								display: { xs: "flex", md: "none" },
							}}
						>
							<img src={require("../img/logo.png")} width="40" />
						</Box>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "block" },
							}}
						></Box>
						<Box
							sx={{
								flexGrow: 0,
								display: { xs: "none", md: "flex" },
							}}
						>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: "white",
										display: "block",
									}}
								>
									{page}
								</Button>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>

			<Box
				component="main"
				sx={{
					p: 5,
					minHeight: "100vh",
				}}
			>
				<Toolbar />
				{/* content */}
				<FormPendaftaran />
			</Box>

			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					background: "#003177",
					height: "100px",
				}}
			>
				<Typography
					variant="p"
					textAlign="center"
					color="#fff"
					sx={{ flexGrow: 1 }}
				>
					&copy; Copyright 2023 | Youth GPdI Metro
				</Typography>
			</Box>
		</Box>
	);
}
export default ResponsiveAppBar;
