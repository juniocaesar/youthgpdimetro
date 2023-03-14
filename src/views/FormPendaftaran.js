import React from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { db } from "../firebaseConfig";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

function FormPendaftaran() {
	const [nama, setNama] = useState("");
	const handleNamaChange = (e) => {
		setNama(e.target.value);
	};

	const [tanggalLahir, setTanggalLahir] = useState(dayjs());
	const handleTanggalLahirChange = (e) => {
		setTanggalLahir(dayjs(e.target));
		let date = dayjs(e.target).get("date");
		let month = dayjs(e.target).get("month");
		let year = dayjs(e.target).get("year");
		let fullDate = date + "/" + month + "/" + year;
		console.log(fullDate);
	};

	const writeToDatabase = () => {};

	return (
		<Stack
			direction={{ xs: "column", md: "row", sm: "column" }}
			justifyContent="center"
			//   alignItems="center"
		>
			<Card
				sx={{
					minWidth: { sm: 275, md: 280 },
					borderRadius: 0,
					background: "#003177",
					p: 2,
				}}
			>
				<CardContent>
					<Box
						sx={{ p: 14, display: { xs: "none", md: "block" } }}
					></Box>
					<Typography
						variant="h2"
						textAlign="right"
						fontWeight="900"
						color="#fff"
					>
						Calling
					</Typography>
					<Typography
						variant="h3"
						textAlign="right"
						fontWeight="900"
						color="#fff"
					>
						to the
					</Typography>
					<Typography
						variant="h1"
						textAlign="right"
						fontWeight="900"
						color="#fff"
					>
						Youth!
					</Typography>
				</CardContent>
				<CardActions></CardActions>
			</Card>
			<Card sx={{ minWidth: { sm: 275, md: 550 }, borderRadius: 0 }}>
				<CardContent sx={{ p: 5 }}>
					<Typography
						variant="h4"
						textAlign="left"
						fontWeight="bold"
						color="#003177"
					>
						Form Pendaftaran
					</Typography>
					<Divider sx={{ my: 2 }} />
					<TextField
						id="standard-textarea"
						label="Nama Lengkap"
						placeholder="Nama Lengkap"
						variant="outlined"
						fullWidth
						value={nama}
						onChange={handleNamaChange}
						sx={{ mb: 1 }}
					/>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DemoContainer components={["DatePicker"]}>
							<DatePicker
								margin="normal"
								disableFuture
								views={["year", "month", "day"]}
								value={tanggalLahir}
								onChange={handleTanggalLahirChange}
								// maxDate={maxdate}
								format="DD/MM/YYYY"
								openTo="year"
								sx={{ flexGrow: 1, mb: 2 }}
							/>
						</DemoContainer>
					</LocalizationProvider>

					<TextField
						id="standard-multiline-static"
						label="Alamat"
						multiline
						rows={4}
						fullWidth
						defaultValue=""
						variant="outlined"
						sx={{ mb: 2 }}
					/>

					<TextField
						id="standard-textarea"
						label="Nomor Telepon / WhatsApp"
						placeholder="Nomor Telepon / WhatsApp"
						variant="outlined"
						fullWidth
						sx={{ mb: 2 }}
					/>
					<TextField
						id="standard-textarea"
						label="Email"
						placeholder="Email"
						variant="outlined"
						fullWidth
						sx={{ mb: 2 }}
					/>
					<TextField
						id="standard-textarea"
						label="Media Sosial"
						placeholder="Instagram / Facebook / Lainnya"
						variant="outlined"
						fullWidth
						sx={{ mb: 2 }}
					/>
					<Divider sx={{ my: 2 }} />

					<Button
						color="warning"
						sx={{ mb: 1 }}
						fullWidth
						size="large"
						variant="contained"
						href="#contained-buttons"
					>
						Reset Form
					</Button>
					<Button
						sx={{ background: "#003177" }}
						fullWidth
						size="large"
						variant="contained"
						href="#contained-buttons"
					>
						Submit
					</Button>
				</CardContent>
				<CardActions></CardActions>
			</Card>
		</Stack>
	);
}

export default FormPendaftaran;
