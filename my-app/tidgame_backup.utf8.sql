--
-- PostgreSQL database dump
--

\restrict lBayRfS3PbldMqr7GypN23XcDdbUwrgogi4js8HcRvnHFmujhpt4Lfs54ccyYi1

-- Dumped from database version 18.1 (Debian 18.1-1.pgdg13+2)
-- Dumped by pg_dump version 18.1 (Debian 18.1-1.pgdg13+2)

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
-- Name: AccountStatus; Type: TYPE; Schema: public; Owner: myuser
--

CREATE TYPE public."AccountStatus" AS ENUM (
    'AVAILABLE',
    'SOLD'
);


ALTER TYPE public."AccountStatus" OWNER TO myuser;

--
-- Name: OrderStatus; Type: TYPE; Schema: public; Owner: myuser
--

CREATE TYPE public."OrderStatus" AS ENUM (
    'PAID',
    'CANCELLED'
);


ALTER TYPE public."OrderStatus" OWNER TO myuser;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Cart; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Cart" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Cart" OWNER TO myuser;

--
-- Name: CartItem; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."CartItem" (
    id integer NOT NULL,
    "cartId" integer NOT NULL,
    "gameAccountId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."CartItem" OWNER TO myuser;

--
-- Name: CartItem_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public."CartItem_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."CartItem_id_seq" OWNER TO myuser;

--
-- Name: CartItem_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public."CartItem_id_seq" OWNED BY public."CartItem".id;


--
-- Name: Cart_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public."Cart_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Cart_id_seq" OWNER TO myuser;

--
-- Name: Cart_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public."Cart_id_seq" OWNED BY public."Cart".id;


--
-- Name: IdGame; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."IdGame" (
    id integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    price integer NOT NULL,
    description text,
    status public."AccountStatus" DEFAULT 'AVAILABLE'::public."AccountStatus" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "productId" integer NOT NULL,
    image text[]
);


ALTER TABLE public."IdGame" OWNER TO myuser;

--
-- Name: IdGame_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public."IdGame_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."IdGame_id_seq" OWNER TO myuser;

--
-- Name: IdGame_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public."IdGame_id_seq" OWNED BY public."IdGame".id;


--
-- Name: Order; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Order" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    status public."OrderStatus" DEFAULT 'PAID'::public."OrderStatus" NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Order" OWNER TO myuser;

--
-- Name: OrderItem; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."OrderItem" (
    id integer NOT NULL,
    "orderId" integer NOT NULL,
    "gameAccountId" integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."OrderItem" OWNER TO myuser;

--
-- Name: OrderItem_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public."OrderItem_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."OrderItem_id_seq" OWNER TO myuser;

--
-- Name: OrderItem_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public."OrderItem_id_seq" OWNED BY public."OrderItem".id;


--
-- Name: Order_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public."Order_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Order_id_seq" OWNER TO myuser;

--
-- Name: Order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public."Order_id_seq" OWNED BY public."Order".id;


--
-- Name: Post; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Post" (
    id integer NOT NULL,
    title text NOT NULL,
    content text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Post" OWNER TO myuser;

--
-- Name: Post_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public."Post_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Post_id_seq" OWNER TO myuser;

--
-- Name: Post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public."Post_id_seq" OWNED BY public."Post".id;


--
-- Name: Product; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Product" (
    id integer NOT NULL,
    img text NOT NULL,
    type text NOT NULL,
    name text NOT NULL,
    sold integer
);


ALTER TABLE public."Product" OWNER TO myuser;

--
-- Name: Product_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public."Product_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Product_id_seq" OWNER TO myuser;

--
-- Name: Product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public."Product_id_seq" OWNED BY public."Product".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."User" OWNER TO myuser;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO myuser;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO myuser;

--
-- Name: Cart id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Cart" ALTER COLUMN id SET DEFAULT nextval('public."Cart_id_seq"'::regclass);


--
-- Name: CartItem id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."CartItem" ALTER COLUMN id SET DEFAULT nextval('public."CartItem_id_seq"'::regclass);


--
-- Name: IdGame id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."IdGame" ALTER COLUMN id SET DEFAULT nextval('public."IdGame_id_seq"'::regclass);


--
-- Name: Order id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Order" ALTER COLUMN id SET DEFAULT nextval('public."Order_id_seq"'::regclass);


--
-- Name: OrderItem id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."OrderItem" ALTER COLUMN id SET DEFAULT nextval('public."OrderItem_id_seq"'::regclass);


--
-- Name: Post id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Post" ALTER COLUMN id SET DEFAULT nextval('public."Post_id_seq"'::regclass);


--
-- Name: Product id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Product" ALTER COLUMN id SET DEFAULT nextval('public."Product_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Cart; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Cart" (id, "userId", "createdAt") FROM stdin;
1	1	2025-12-21 10:46:33.776
2	2	2025-12-21 17:12:22.499
\.


--
-- Data for Name: CartItem; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."CartItem" (id, "cartId", "gameAccountId", "createdAt") FROM stdin;
2	1	4	2026-01-14 06:24:08.958
3	1	10	2026-01-14 11:50:36.232
\.


--
-- Data for Name: IdGame; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."IdGame" (id, username, password, price, description, status, "createdAt", "productId", image) FROM stdin;
14	valorant_user01	1234_01	299	Valorant account with basic agents unlocked and ready to play	AVAILABLE	2026-01-14 04:51:29.929	5	{/images/products/valorant/valorant01.jpg,/images/products/valorant/valorant01.jpg,/images/products/valorant/valorant01.jpg,/images/products/valorant/valorant01.jpg,/images/products/valorant/valorant01.jpg}
15	valorant_user02	1234_02	499	Mid-level Valorant account with several agents and weapon skins	AVAILABLE	2026-01-14 04:51:40.02	5	{/images/products/valorant/valorant02.jpg,/images/products/valorant/valorant02.jpg,/images/products/valorant/valorant02.jpg,/images/products/valorant/valorant02.jpg,/images/products/valorant/valorant02.jpg}
16	valorant_user03	1234_03	799	High-rank Valorant account with rare skins and many unlocked agents	AVAILABLE	2026-01-14 04:51:48.159	5	{/images/products/valorant/valorant03.jpg,/images/products/valorant/valorant03.jpg,/images/products/valorant/valorant03.jpg,/images/products/valorant/valorant03.jpg,/images/products/valorant/valorant03.jpg}
4	pubg_user01	1234_01	199	PUBG account with basic skins and ready to play	AVAILABLE	2026-01-13 19:38:28.267	1	{/images/products/pubg/pubg01.jpg,/images/products/pubg/pubg01.jpg,/images/products/pubg/pubg01.jpg,/images/products/pubg/pubg01.jpg,/images/products/pubg/pubg01.jpg}
6	pubg_user02	1234_02	349	PUBG account with rare outfits and higher rank	AVAILABLE	2026-01-13 19:39:24.627	1	{/images/products/pubg/pubg02.jpg,/images/products/pubg/pubg02.jpg,/images/products/pubg/pubg02.jpg,/images/products/pubg/pubg02.jpg,/images/products/pubg/pubg02.jpg}
7	pubg_user03	1234_03	499	High level PUBG account with legendary skins	AVAILABLE	2026-01-13 19:39:37.693	1	{/images/products/pubg/pubg03.jpg,/images/products/pubg/pubg03.jpg,/images/products/pubg/pubg03.jpg,/images/products/pubg/pubg03.jpg,/images/products/pubg/pubg03.jpg}
8	rov_user01	1234_01	299	ROV account with many heroes and basic skins, ready to play	AVAILABLE	2026-01-13 19:47:26.908	2	{/images/products/rov/rov01.jpg,/images/products/rov/rov01.jpg,/images/products/rov/rov01.jpg,/images/products/rov/rov01.jpg,/images/products/rov/rov01.jpg}
9	rov_user02	1234_02	549	High rank ROV account with rare skins and many heroes	AVAILABLE	2026-01-13 19:47:47.205	2	{/images/products/rov/rov02.jpg,/images/products/rov/rov02.jpg,/images/products/rov/rov02.jpg,/images/products/rov/rov02.jpg,/images/products/rov/rov02.jpg}
10	mc_user01	1234_01	199	Minecraft account with full access, survival mode ready and basic skins	AVAILABLE	2026-01-14 04:49:16.891	3	{/images/products/minecraft/minecraft01.jpg,/images/products/minecraft/minecraft01.jpg,/images/products/minecraft/minecraft01.jpg,/images/products/minecraft/minecraft01.jpg,/images/products/minecraft/minecraft01.jpg}
11	mc_user02	1234_02	399	Premium Minecraft account with custom skins and access to multiplayer servers	AVAILABLE	2026-01-14 04:49:28.165	3	{/images/products/minecraft/minecraft02.jpg,/images/products/minecraft/minecraft02.jpg,/images/products/minecraft/minecraft02.jpg,/images/products/minecraft/minecraft02.jpg,/images/products/minecraft/minecraft02.jpg}
17	pes_user01	1234_01	199	PES account with starter team and some unlocked players	AVAILABLE	2026-01-14 04:54:21.638	4	{/images/products/pes/pes01.jpg,/images/products/pes/pes01.jpg,/images/products/pes/pes01.jpg,/images/products/pes/pes01.jpg,/images/products/pes/pes01.jpg}
18	pes_user02	1234_02	399	PES account with strong squad and rare players	AVAILABLE	2026-01-14 04:54:30.177	4	{/images/products/pes/pes02.jpg,/images/products/pes/pes02.jpg,/images/products/pes/pes02.jpg,/images/products/pes/pes02.jpg,/images/products/pes/pes02.jpg}
\.


--
-- Data for Name: Order; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Order" (id, "userId", status, "createdAt") FROM stdin;
\.


--
-- Data for Name: OrderItem; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."OrderItem" (id, "orderId", "gameAccountId", "createdAt") FROM stdin;
\.


--
-- Data for Name: Post; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Post" (id, title, content, "createdAt") FROM stdin;
1	Test	skye	2025-12-11 07:17:17.264
\.


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Product" (id, img, type, name, sold) FROM stdin;
1	/images/products/pubg-image.png	Mobile	PUBG BATTLEGROUNDS	120
2	/images/products/rov-image.png	Mobile	ROV	250
3	/images/products/minecraft-image.png	PC game	Minecraft	300
4	/images/products/pes-image.png	Mobile	E football	150
5	/images/products/valorant-image.png	PC game	Valorant	400
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."User" (id, email, password, "createdAt") FROM stdin;
1	test1@gmail.com	$2b$10$qVUZ5aBA0ZvyuyEqqIt65uZhyujNku56dYqtSE.t8VfDK0VGkCB4W	2025-12-21 10:46:33.776
2	test2@gmail.com	$2b$10$ZnUHfuqZfQs0XYLsj84Qy.tOVWJJDzftyFctEc0he/McCbEvyI8qO	2025-12-21 17:12:22.499
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
947b2611-954d-4bb8-88f7-faa0038af5f7	c32591043c5262f3679618354bfa937c5c928a4629deb5a90f36cd7b5283d134	2025-12-11 07:07:49.184534+00	20251211070749_create	\N	\N	2025-12-11 07:07:49.173448+00	1
d5fa77c7-c4bf-40ef-bf4e-29341ebf235f	bbb47d253cad80ab8b8ba3cf89ebd4287a1bbe4d400a53b6264d810759e01ffe	2025-12-11 16:30:28.270799+00	20251211163028_creat	\N	\N	2025-12-11 16:30:28.24902+00	1
4e570427-0bf9-414a-9315-811284c4436b	5cf039235e933785831f159d05d0cacc25ed0a1eab633a289452d90d17d0e870	2025-12-11 16:40:24.504708+00	20251211164024_delete	\N	\N	2025-12-11 16:40:24.495689+00	1
5e2ebb0f-fa40-4063-8491-36ccb86f73b4	d884c30b9154ea990aa64437fce6d9ef0591cc71a0ae3673b463a36374b59156	2025-12-21 06:29:58.951626+00	20251221062958_create_idgame_order_order_item_and_user_table	\N	\N	2025-12-21 06:29:58.921529+00	1
c6fe55d1-0738-484c-a819-6d114a4928e5	70468157967b7c97fbc144f8b821b111a39f5283aa17d33e460286f4f3d27281	2025-12-21 08:54:49.873185+00	20251221085449_creat_cart_table	\N	\N	2025-12-21 08:54:49.262919+00	1
a409ad37-13a7-4c9f-850f-9e4c70318a21	06b1fc4ab354199fed56a169961e80582e64d4a388bd1fc2b7610602bfd54d2b	2025-12-23 16:27:59.474525+00	20251223162713_add_image_in_idgame_table	\N	\N	2025-12-23 16:27:59.39432+00	1
\.


--
-- Name: CartItem_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public."CartItem_id_seq"', 3, true);


--
-- Name: Cart_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public."Cart_id_seq"', 2, true);


--
-- Name: IdGame_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public."IdGame_id_seq"', 18, true);


--
-- Name: OrderItem_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public."OrderItem_id_seq"', 1, false);


--
-- Name: Order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public."Order_id_seq"', 1, false);


--
-- Name: Post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public."Post_id_seq"', 1, true);


--
-- Name: Product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public."Product_id_seq"', 15, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public."User_id_seq"', 2, true);


--
-- Name: CartItem CartItem_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."CartItem"
    ADD CONSTRAINT "CartItem_pkey" PRIMARY KEY (id);


--
-- Name: Cart Cart_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Cart"
    ADD CONSTRAINT "Cart_pkey" PRIMARY KEY (id);


--
-- Name: IdGame IdGame_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."IdGame"
    ADD CONSTRAINT "IdGame_pkey" PRIMARY KEY (id);


--
-- Name: OrderItem OrderItem_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."OrderItem"
    ADD CONSTRAINT "OrderItem_pkey" PRIMARY KEY (id);


--
-- Name: Order Order_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_pkey" PRIMARY KEY (id);


--
-- Name: Post Post_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: CartItem_cartId_gameAccountId_key; Type: INDEX; Schema: public; Owner: myuser
--

CREATE UNIQUE INDEX "CartItem_cartId_gameAccountId_key" ON public."CartItem" USING btree ("cartId", "gameAccountId");


--
-- Name: Cart_userId_key; Type: INDEX; Schema: public; Owner: myuser
--

CREATE UNIQUE INDEX "Cart_userId_key" ON public."Cart" USING btree ("userId");


--
-- Name: OrderItem_gameAccountId_key; Type: INDEX; Schema: public; Owner: myuser
--

CREATE UNIQUE INDEX "OrderItem_gameAccountId_key" ON public."OrderItem" USING btree ("gameAccountId");


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: myuser
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: CartItem CartItem_cartId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."CartItem"
    ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES public."Cart"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CartItem CartItem_gameAccountId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."CartItem"
    ADD CONSTRAINT "CartItem_gameAccountId_fkey" FOREIGN KEY ("gameAccountId") REFERENCES public."IdGame"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Cart Cart_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Cart"
    ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: IdGame IdGame_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."IdGame"
    ADD CONSTRAINT "IdGame_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: OrderItem OrderItem_gameAccountId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."OrderItem"
    ADD CONSTRAINT "OrderItem_gameAccountId_fkey" FOREIGN KEY ("gameAccountId") REFERENCES public."IdGame"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: OrderItem OrderItem_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."OrderItem"
    ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."Order"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Order Order_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

\unrestrict lBayRfS3PbldMqr7GypN23XcDdbUwrgogi4js8HcRvnHFmujhpt4Lfs54ccyYi1


