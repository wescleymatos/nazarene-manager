-- phpMyAdmin SQL Dump
-- version 4.5.3.1
-- http://www.phpmyadmin.net
--
-- Host: 179.188.16.148
-- Generation Time: 06-Set-2017 às 20:36
-- Versão do servidor: 5.6.35-81.0-log
-- PHP Version: 5.6.30-0+deb8u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nazarene`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `church_id` int(11) NOT NULL,
  `accounts_subcategory_id` int(11) NOT NULL,
  `kind` enum('E','S') NOT NULL,
  `year_base` year(4) NOT NULL,
  `date` date DEFAULT NULL,
  `value` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `accounts_categories`
--

CREATE TABLE `accounts_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `kind` enum('E','S') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `accounts_subcategories`
--

CREATE TABLE `accounts_subcategories` (
  `id` int(11) NOT NULL,
  `accounts_category_id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `churches`
--

CREATE TABLE `churches` (
  `id` int(11) NOT NULL,
  `district_id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `status` enum('N','O') NOT NULL DEFAULT 'N',
  `date_organization` date DEFAULT NULL,
  `date_early_ministry` date DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  `zip_code` varchar(9) DEFAULT NULL,
  `neighborhood` varchar(200) DEFAULT NULL,
  `complement` varchar(200) DEFAULT NULL,
  `public_place` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `churches`
--

INSERT INTO `churches` (`id`, `district_id`, `name`, `status`, `date_organization`, `date_early_ministry`, `phone`, `email`, `city`, `state`, `zip_code`, `neighborhood`, `complement`, `public_place`) VALUES
(1, 1, 'Igreja do nazareno Lagoa Nova', 'O', '1984-10-12', '1987-01-01', '(84) 3201-1501', 'igreja@nazarenonatal.com.br', 'Natal', 'RN', '59056-045', NULL, 'Avenida Bernardo Vieira, 4220', NULL),
(2, 1, 'Igreja do nazareno Satélite', 'O', '1989-12-28', '2009-02-01', '(84) 3218-1039', 'proluzinedeide@hotmail.com', 'Natal', 'RN', '59068-560', NULL, 'Rua Tamboara, 237', NULL),
(3, 1, 'Igreja do nazareno Parque dos Coqueiros', 'O', '2005-12-15', '2004-03-01', '(84) 3081-2179', 'soaresajs@yahoo.com.br', 'Natal', 'RN', '59115-320', NULL, 'Rua dos Esportes', NULL),
(4, 1, 'Igreja do nazareno Cidade da Esperança', 'O', '2007-12-28', '2009-01-01', '', '', 'Natal', 'RN', '59000-000', NULL, 'AV. INTERVENTOR MARIO CAMERA, 2169', NULL),
(5, 1, 'Igreja do nazareno Ponta Negra', 'O', '2009-12-19', '2010-09-01', '(84) 8711-7987', 'nazapontanegra@gmail.com', 'Natal', 'RN', '59090-260', NULL, 'Rua da Floresta,630', NULL),
(6, 1, 'Igreja do Nazareno em Capim Macio', 'O', '2013-04-06', '2013-04-04', '', '', 'Natal', 'RN', '', NULL, 'Capim Macio', NULL),
(7, 1, 'Igreja do nazareno Zona Sul - Natal', 'O', '1999-11-01', '2002-03-09', '(84) 3608-0037', 'pralsantos@hotmail.com', 'Parnamirim', 'RN', '59152-600', NULL, 'Avenida Maria Lacerda Montenegro', NULL),
(8, 1, 'Igreja do nazareno Parnamirim - Nazapar', 'O', '2009-12-17', '2012-01-01', '', '', 'Parnamirim', 'RN', '59142-990', NULL, 'RUA BELA PARNAMIRIM, 35A', NULL),
(9, 1, 'Igreja do nazareno Nova Betania', 'O', '2002-12-21', '2001-04-01', '(84) 3321-4616', 'ck_lins@hotmail.com', 'Mossoró', 'RN', '', NULL, '', NULL),
(10, 1, 'Igreja do Nazareno - FILADÉLFIA', 'O', '2013-11-30', '2012-01-01', '', '', 'Mossoró', 'RN', '', NULL, '', NULL),
(11, 1, 'Igreja do nazareno Ebenezer', 'O', '2008-12-28', '2008-12-28', '(84) 3437-2479', 'dedearcia.maria@htmail.com', 'Lagoa Nova', 'RN', '59390-000', NULL, 'Rua TOMAS SILVEIRA, 214', NULL),
(12, 1, 'Igreja do nazareno Currais Novos', 'O', '2011-11-26', '2010-09-04', '', 'dedegarcia.maria@hotmail.com', 'Currais Novos', 'RN', '59380-000', NULL, '', NULL),
(13, 1, 'Igreja do Nazareno em Picos', 'O', '2009-01-03', '2009-01-03', '(89) 9925-3777', 'revpdpn@bol.com.br', 'Picos', 'PI', '', NULL, '', NULL),
(14, 1, 'Igreja do Nazareno Zona Sul - TERESINA', 'O', '2009-01-01', '2013-02-01', '', '', 'Terezina', 'PI', '', NULL, '', NULL),
(15, 1, 'Igreja do Nazareno Memorial', 'O', '2009-01-01', '2004-10-01', '', '', 'São Raimundo Nonato', 'PI', '', NULL, '', NULL),
(16, 1, 'Igreja do Nazareno em Santa Cruz', 'O', '2013-11-30', '2013-02-01', '', 'prcezar.cavalcanti@gmail.com', 'Santa Cruz', 'RN', '59000-000', NULL, 'Rua José Ferreira  de Medeiros, 176 ', NULL),
(17, 1, 'Igreja do Nazareno - Esperança', 'O', '2007-11-30', '2010-01-01', '(85) 3264-4831', 'agaffi@hotmail.com', 'Fortaleza', 'CE', '60130-270', NULL, 'Rua Eduardo Bezerra, 514', NULL),
(18, 1, 'Igreja do Nazareno - Castelão', 'O', '1988-11-19', '2009-09-01', '', 'alexandre@nazareno.com.br', 'Fortaleza', 'CE', '60802-010', NULL, 'Rua Prof. José da Silveira, 1.440', NULL),
(19, 1, 'Igreja do Nazareno - Ágape', 'O', '2011-11-19', '2011-11-01', '(85) 8700-7095', 'jorgeseupastor@hotmail.com', 'Fortaleza', 'CE', '', NULL, '', NULL),
(20, 1, 'Igreja do Nazareno - Cohab', 'O', '2009-12-01', '2009-12-01', '(98) 8844-4319', 'pr_psa@yahoo.com.br', 'São Luiz', 'MA', '65060-000', NULL, 'AV. SENADOR COSTA RODRIGUES, 11', NULL),
(21, 1, 'Igreja do Nazareno - Anil', 'O', '2009-12-01', '2006-01-18', '(98) 3082-8517', 'nazamar2011@live.com', 'São Luiz', 'MA', '65060-700', NULL, 'Avenida São Sebastião, 722', NULL),
(22, 1, 'Igreja do Nazareno em Remanso', 'O', '2011-01-01', '2009-01-01', '', 'ciedaeromao.e.k@hotmail.com', 'Remanso', 'BA', '47200-000', NULL, 'AV. DÉCIO CASTELO BRANCO, 910 Q. 19', NULL),
(23, 3, 'Igreja do Nazareno nos Bancários', 'O', NULL, NULL, '(83) 3045-1609', 'pastorany@hotmail.com', 'João Pessoa', 'PB', '58052-200', NULL, 'Rua Walfredo Macedo Brandão', NULL),
(24, 3, 'IGREJA DO NAZARENO TAMARINEIRA', 'O', '2014-10-10', '2014-10-10', '', '', 'Recife', 'PE', '50000-000', NULL, '', NULL),
(25, 11, 'Igreja do Nazareno Central de Manaus', 'O', NULL, NULL, '', '', 'Manaus', 'AM', '', NULL, '', NULL),
(26, 11, 'Igreja do Nazareno São Sebastião', 'O', NULL, NULL, '', '', 'Manaus', 'AM', '', NULL, '', NULL),
(27, 11, 'Igreja do Nazareno Canaã', 'O', NULL, NULL, '', '', 'Manaus', 'AM', '', NULL, '', NULL),
(28, 11, 'Igreja do Nazareno de Novo Airão', 'O', NULL, NULL, '', '', 'Novo Airão', 'AM', '', NULL, '', NULL),
(29, 11, 'Igreja do Nazareno Boa Vista', 'O', NULL, NULL, '', '', 'Boa Vista', 'RO', '', NULL, '', NULL),
(30, 1, 'Igreja do Nazareno Rio Branco', 'O', NULL, NULL, '', '', 'Rio Branco', 'AC', '', NULL, '', NULL),
(31, 1, 'Igreja do Nazareno Porto Velho', 'O', NULL, NULL, '', '', 'Porto Velho', 'RO', '', NULL, '', NULL),
(32, 11, 'Igreja do nazareno Parintins', 'O', NULL, NULL, '', '', 'Parintins', 'AM', '', NULL, '', NULL),
(33, 11, 'Igreja do Nazareno Macapá', 'O', NULL, NULL, '', '', 'Macapá', 'AP', '', NULL, '', NULL),
(34, 11, 'Igreja do Nazareno Belém', 'O', NULL, NULL, '', '', 'Belém', 'PA', '', NULL, '', NULL),
(35, 11, 'Igreja do Nazareno Castanhal', 'O', NULL, NULL, '', '', 'Belém', 'PA', '', NULL, '', NULL),
(36, 8, 'igrejA do Nazareno - Castelo', 'O', NULL, NULL, '', '', 'Campinas', 'SP', '', NULL, '', NULL),
(37, 8, 'Igreja do Nazareno - Barão Geraldo', 'O', NULL, NULL, '', '', 'Campinas', 'SP', '', NULL, '', NULL),
(38, 1, 'Igreja do Nazareno - Fartura', 'O', '2015-01-01', '2015-01-01', '', '', 'Fartura do Piauí', 'PI', '64688-970', NULL, '', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `designations`
--

CREATE TABLE `designations` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `acronym` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `districts`
--

CREATE TABLE `districts` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `districts`
--

INSERT INTO `districts` (`id`, `name`) VALUES
(1, 'DISTRITO NORDESTE SETENTRIONAL'),
(2, 'DISTRITO NORDESTE MERIDIONAL'),
(3, 'DISTRITO NORDESTE CENTRAL'),
(4, 'DISTRITO GAÚCHO'),
(5, 'DISTRITO R.J. BAIXADA'),
(6, 'DISTRITO LONDRINA/MT. DO SUL'),
(7, 'DISTRITO CURITIBA'),
(8, 'DISTRITO SUDESTE PAULISTA'),
(9, 'DISTRITO PAULISTA'),
(10, 'DISTRITO CAPIXABA'),
(11, 'DISTRITO AMAZÔNIA'),
(12, 'DISTRITO STA. CATARINA'),
(13, 'DISTRITO PAULISTANO'),
(14, 'DISTRITO GRANDE RIO'),
(15, 'DISTRITO MINAS GERAIS'),
(16, 'DISTRITO NORDESTE PAULISTA'),
(17, 'DISTRITO CENTRO - OESTE');

-- --------------------------------------------------------

--
-- Estrutura da tabela `histories`
--

CREATE TABLE `histories` (
  `id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `kind` enum('E','S') NOT NULL,
  `status` enum('ECO','EPF','ETN','ETO','SPD','SPM','SPN','SPO','SPR') DEFAULT NULL,
  `date` date DEFAULT NULL,
  `observation` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `church_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `status` enum('ATI','ARQ','ASS','CON','INA') NOT NULL,
  `cpf` varchar(11) DEFAULT NULL,
  `education` varchar(3) DEFAULT NULL,
  `status_marital` enum('C','D','S','V') DEFAULT NULL,
  `date_marriage` date DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `date_coversion` date DEFAULT NULL,
  `date_baptism` date DEFAULT NULL,
  `phone1` varchar(15) DEFAULT NULL,
  `phone2` varchar(15) DEFAULT NULL,
  `zip_code` varchar(9) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  `neighborhood` varchar(200) DEFAULT NULL,
  `complement` varchar(200) DEFAULT NULL,
  `public_place` varchar(200) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `pastor` tinyint(1) DEFAULT '0',
  `observation` text,
  `link_facebook` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pastors`
--

CREATE TABLE `pastors` (
  `id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `designation_id` int(11) NOT NULL,
  `ondination` enum('DIA','EVA','LEI','LIC','PRE') NOT NULL,
  `year_ordination` year(4) NOT NULL,
  `main` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `church_id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `active` tinyint(1) DEFAULT '1',
  `kind` enum('A','D','I') DEFAULT 'I'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `church_id`, `name`, `email`, `password`, `active`, `kind`) VALUES
(12, 1, 'wescley alves matos', 'wescleymatos@gmail.com', '$2y$10$8HqOg6YL83Is/blwHwcVVON2njnxwBrAxoq9YNCilELmAB8NJ1EJ2', 1, 'I'),
(13, 1, 'administrador', 'wescley@nazarenonatal.com.br', '$2y$10$8HqOg6YL83Is/blwHwcVVON2njnxwBrAxoq9YNCilELmAB8NJ1EJ2', 1, 'A'),
(22, 1, 'distrito NS', 'dns@nazarenonatal.com.br', '$2y$10$haikNdzF5Ejl0RPfp32i3.Qg/T2ki0WJEq1xIE6pzaeBNsNN/mCH.', 1, 'D'),
(23, 23, 'distrito NC', 'dnc@nazarenonatal.com.br', '$2y$10$R2MSbIEd9mYVDfbpRyQGMu/PXTufrPcMKcGykGLDsZ8QUqVVrxBAK', 1, 'D');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_accounts_churches1_idx` (`church_id`),
  ADD KEY `fk_accounts_accounts_subcategories1_idx` (`accounts_subcategory_id`);

--
-- Indexes for table `accounts_categories`
--
ALTER TABLE `accounts_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `accounts_subcategories`
--
ALTER TABLE `accounts_subcategories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_accounts_subcategories_accounts_categories1_idx` (`accounts_category_id`);

--
-- Indexes for table `churches`
--
ALTER TABLE `churches`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_churches_districts1_idx` (`district_id`);

--
-- Indexes for table `designations`
--
ALTER TABLE `designations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_histories_members1_idx` (`member_id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_members_churches1_idx` (`church_id`);

--
-- Indexes for table `pastors`
--
ALTER TABLE `pastors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pastors_members1_idx` (`member_id`),
  ADD KEY `fk_pastors_designations1_idx` (`designation_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD KEY `fk_users_churches_idx` (`church_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `accounts_categories`
--
ALTER TABLE `accounts_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `accounts_subcategories`
--
ALTER TABLE `accounts_subcategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `churches`
--
ALTER TABLE `churches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT for table `designations`
--
ALTER TABLE `designations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `districts`
--
ALTER TABLE `districts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `histories`
--
ALTER TABLE `histories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `pastors`
--
ALTER TABLE `pastors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `fk_accounts_accounts_subcategories1` FOREIGN KEY (`accounts_subcategory_id`) REFERENCES `accounts_subcategories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_accounts_churches1` FOREIGN KEY (`church_id`) REFERENCES `churches` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `accounts_subcategories`
--
ALTER TABLE `accounts_subcategories`
  ADD CONSTRAINT `fk_accounts_subcategories_accounts_categories1` FOREIGN KEY (`accounts_category_id`) REFERENCES `accounts_categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `churches`
--
ALTER TABLE `churches`
  ADD CONSTRAINT `fk_churches_districts1` FOREIGN KEY (`district_id`) REFERENCES `districts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `histories`
--
ALTER TABLE `histories`
  ADD CONSTRAINT `fk_histories_members1` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `members`
--
ALTER TABLE `members`
  ADD CONSTRAINT `fk_members_churches1` FOREIGN KEY (`church_id`) REFERENCES `churches` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `pastors`
--
ALTER TABLE `pastors`
  ADD CONSTRAINT `fk_pastors_designations1` FOREIGN KEY (`designation_id`) REFERENCES `designations` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pastors_members1` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_churches` FOREIGN KEY (`church_id`) REFERENCES `churches` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
