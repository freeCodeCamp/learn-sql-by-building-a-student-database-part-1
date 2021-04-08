SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pid<>pg_backend_pid();

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6 (Debian 12.6-1.pgdg90+1)
-- Dumped by pg_dump version 12.6 (Debian 12.6-1.pgdg90+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP TABLE public.students;
DROP TABLE public.majors;
SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: majors; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.majors (
);


ALTER TABLE public.majors OWNER TO freecodecamp;

--
-- Name: students; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.students (
);


ALTER TABLE public.students OWNER TO freecodecamp;

--
-- Data for Name: majors; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--



--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--



--
-- PostgreSQL database dump complete
--

