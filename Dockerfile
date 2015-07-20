FROM centos:6
MAINTAINER Sumit Kumar <sumitk.85@gmail.com>

RUN yum -y install epel-release && \
    yum -y install php php-fpm php-gd php-ldap \
    php-sqlite php-pgsql php-pear php-mysql \
    php-mcrypt php-xcache php-xml php-xmlrpc \
    msmtp nginx && \
    sed -i '/^listen/c \
    listen = 0.0.0.0:9000' /etc/php-fpm.d/www.conf && \
    sed -i 's/^listen.allowed_clients/;listen.allowed_clients/' /etc/php-fpm.d/www.conf && \
    mkdir -p /srv/http && \
    echo "<?php phpinfo(); ?>" > /srv/http/index.php && \
    chown -R apache:apache /srv/http && \
    chown -R apache:apache /var/run/php-fpm

ADD profile /srv/http/
RUN chown -R apache:apache /srv/http
EXPOSE 9000 80
VOLUME /srv/http
COPY ./start.sh /
RUN chmod 755 /start.sh
ENTRYPOINT["/start.sh"]
