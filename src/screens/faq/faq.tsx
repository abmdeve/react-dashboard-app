import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../context/theme";
import HeaderComponent from "../../components/Header/HeaderComponent";
import { ExpandMoreOutlined } from "@mui/icons-material";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <Box>
        <HeaderComponent
          title="FAQ"
          subtitle="Frequently Asked Questions Page"
        />
      </Box>
      {/*  111111111 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Importan question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed magnam
            dolores omnis, asperiores libero quae blanditiis. Aspernatur
            consequatur molestias quidem debitis aperiam dolor autem, quibusdam
            alias esse delectus explicabo ipsa.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  22222222222 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Importan question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed magnam
            dolores omnis, asperiores libero quae blanditiis. Aspernatur
            consequatur molestias quidem debitis aperiam dolor autem, quibusdam
            alias esse delectus explicabo ipsa.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  333333333333 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your favorite question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed magnam
            dolores omnis, asperiores libero quae blanditiis. Aspernatur
            consequatur molestias quidem debitis aperiam dolor autem, quibusdam
            alias esse delectus explicabo ipsa.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  444444444444 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed magnam
            dolores omnis, asperiores libero quae blanditiis. Aspernatur
            consequatur molestias quidem debitis aperiam dolor autem, quibusdam
            alias esse delectus explicabo ipsa.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*  5555555555555 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed magnam
            dolores omnis, asperiores libero quae blanditiis. Aspernatur
            consequatur molestias quidem debitis aperiam dolor autem, quibusdam
            alias esse delectus explicabo ipsa.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
