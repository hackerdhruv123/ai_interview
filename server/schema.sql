--
-- PostgreSQL database dump
--

\restrict xNECR9zVpW7laYd4ThTRZSJCnM5gVyATQUH1S3BGdXAHUwx0m2foSgPOr3nrXEb

-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: interview_results; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.interview_results (
    id integer NOT NULL,
    user_id integer,
    role character varying(100),
    score integer,
    technical_score integer,
    communication_score integer,
    problem_solving integer,
    confidence_score integer,
    strengths text[],
    improvements text[],
    feedback text,
    created_at timestamp without time zone DEFAULT now()
);


--
-- Name: interview_results_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.interview_results_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: interview_results_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.interview_results_id_seq OWNED BY public.interview_results.id;


--
-- Name: resume_analysis; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.resume_analysis (
    id integer NOT NULL,
    user_id integer,
    resume_name character varying(255),
    ats_score integer,
    overall_score integer,
    strengths text,
    weaknesses text,
    missing_keywords text,
    suggestions text,
    extracted_text text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: resume_analysis_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.resume_analysis_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: resume_analysis_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.resume_analysis_id_seq OWNED BY public.resume_analysis.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(255) NOT NULL,
    password text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    reset_token character varying(255),
    reset_token_expiry timestamp without time zone
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: interview_results id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.interview_results ALTER COLUMN id SET DEFAULT nextval('public.interview_results_id_seq'::regclass);


--
-- Name: resume_analysis id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resume_analysis ALTER COLUMN id SET DEFAULT nextval('public.resume_analysis_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: interview_results interview_results_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.interview_results
    ADD CONSTRAINT interview_results_pkey PRIMARY KEY (id);


--
-- Name: resume_analysis resume_analysis_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resume_analysis
    ADD CONSTRAINT resume_analysis_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: resume_analysis resume_analysis_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resume_analysis
    ADD CONSTRAINT resume_analysis_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict xNECR9zVpW7laYd4ThTRZSJCnM5gVyATQUH1S3BGdXAHUwx0m2foSgPOr3nrXEb

