import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с сайта на почту info@поддонпро.рф"""
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    message = body.get('message', '').strip()

    if not name or not phone:
        return {'statusCode': 400, 'headers': headers, 'body': json.dumps({'error': 'Имя и телефон обязательны'})}

    smtp_host = 'smtp.yandex.ru'
    smtp_port = 465
    smtp_user = 'info@xn--e1afmkfd4d.xn--p1ai'
    smtp_password = os.environ['SMTP_PASSWORD']
    to_email = 'info@xn--e1afmkfd4d.xn--p1ai'

    msg = MIMEMultipart()
    msg['From'] = 'info@поддонпро.рф'
    msg['To'] = 'info@поддонпро.рф'
    msg['Subject'] = f'Новая заявка с сайта — {name}'

    text = f"""Новая заявка с сайта поддонпро.рф

Имя: {name}
Телефон: {phone}
Сообщение: {message or '—'}
"""
    msg.attach(MIMEText(text, 'plain', 'utf-8'))

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {'statusCode': 200, 'headers': headers, 'body': json.dumps({'ok': True})}