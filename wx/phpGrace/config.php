<?php
return array(
	//数据库配置
	'db'                 => array(
    	'host'           =>    '127.0.0.1',
    	'port'           =>    '3306',
		'user'           =>    'wx_orianna_top',
		'pwd'            =>    'bdiGK7kZJHxZPxKF',
		'dbname'         =>    'wx_orianna_top',
		'charset'        =>    'utf8',
		'pre'            =>    'lct_'
	),
	//支持的缓存类型
	'allowCacheType'     => array('file', 'memcache', 'redis'),
	//缓存设置
	'cache'             => array(
		'type'          => 'file',
		'pre'           => 'grace'
	)
);
